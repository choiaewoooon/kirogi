// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {EvmV1Decoder} from "@gluwa/usc-contracts/contracts/decoding/EvmV1Decoder.sol";
import {ASCBase} from "./vendor/ASCBase.sol";
import {SettlementPool} from "./SettlementPool.sol";

/// @title KirogiASC
/// @notice Attestcoin Smart Contract that turns a proven Ethereum remittance into a real payout
///         on Creditcoin.
///
/// @dev What this contract trusts, precisely:
///        - It trusts the canonical stablecoin's `Transfer` log, because that log cannot exist
///          unless the token actually moved. This is the load-bearing fact.
///        - It does NOT trust our own `RemittanceSent` log for anything but metadata
///          (beneficiary, purpose). Those are self-reported and the deck says so.
///      ASCBase has already proven inclusion and rejected replays before we are called.
contract KirogiASC is ASCBase, Ownable {
    /// keccak256("Transfer(address,address,uint256)")
    bytes32 public constant TRANSFER_SIG = 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef;
    /// keccak256("RemittanceSent(address,bytes32,uint256,uint16)")
    bytes32 public constant REMITTANCE_SENT_SIG = 0xce078d37286b6064b3b852c2e43aba27e55ab5e2cecf542ca99261bc53388099;

    /// @notice One source chain's wiring. Nothing is hardcoded, so enabling a chain that
    ///         Attestcoin adds later is a registration call, not a rewrite.
    struct SourceConfig {
        uint64 chainKey;
        address gateway;   // our RemittanceGateway on that chain
        address token;     // canonical stablecoin on that chain (e.g. Circle USDC)
        address treasury;  // where the gateway forwards the stablecoin
        bool enabled;
    }

    /// @dev Keyed by the `action` byte the submitter passes to `execute`.
    mapping(uint8 => SourceConfig) public sourceConfigs;
    /// @dev Gateway addresses are unique across configs, so a submitter cannot select a
    ///      different chain's config than the one whose logs it is presenting.
    mapping(address => bool) public gatewayRegistered;

    SettlementPool public pool;

    event SourceConfigured(uint8 indexed action, uint64 chainKey, address gateway, address token);
    event RemittanceSettled(
        bytes32 indexed queryId,
        bytes32 indexed beneficiaryId,
        address indexed sender,
        uint256 amount,
        uint16 purposeCode
    );

    error UnknownSource(uint8 action);
    error UnsupportedTxType(uint8 txType);
    error SourceTransactionFailed();
    error NoCanonicalTransfer();
    error NoRemittanceEvent();
    error AmountMismatch(uint256 tokenAmount, uint256 claimedAmount);
    error SenderMismatch(address tokenFrom, address claimedSender);
    error PoolNotSet();

    constructor(address initialOwner) Ownable(initialOwner) {}

    function setPool(SettlementPool pool_) external onlyOwner {
        pool = pool_;
    }

    function configureSource(
        uint8 action,
        uint64 chainKey,
        address gateway,
        address token,
        address treasury
    ) external onlyOwner {
        require(gateway != address(0) && token != address(0) && treasury != address(0), "zero arg");
        SourceConfig memory existing = sourceConfigs[action];
        if (existing.gateway != gateway) {
            require(!gatewayRegistered[gateway], "gateway already registered");
            if (existing.gateway != address(0)) gatewayRegistered[existing.gateway] = false;
            gatewayRegistered[gateway] = true;
        }
        sourceConfigs[action] =
            SourceConfig({chainKey: chainKey, gateway: gateway, token: token, treasury: treasury, enabled: true});
        emit SourceConfigured(action, chainKey, gateway, token);
    }

    function setSourceEnabled(uint8 action, bool enabled) external onlyOwner {
        sourceConfigs[action].enabled = enabled;
    }

    // ---------------------------------------------------------------------
    // Proof consumption
    // ---------------------------------------------------------------------

    function _processAndEmitEvent(uint8 action, bytes32 queryId, bytes memory encodedTransaction)
        internal
        override
    {
        if (address(pool) == address(0)) revert PoolNotSet();

        SourceConfig memory cfg = sourceConfigs[action];
        if (!cfg.enabled) revert UnknownSource(action);

        // (1) transaction type must be one the decoder understands
        uint8 txType = EvmV1Decoder.getTransactionType(encodedTransaction);
        if (!EvmV1Decoder.isValidTransactionType(txType)) revert UnsupportedTxType(txType);

        // (2) the precompile proves inclusion, NOT success. A reverted remittance must not pay out.
        EvmV1Decoder.ReceiptFields memory receipt = EvmV1Decoder.decodeReceiptFields(encodedTransaction);
        if (receipt.receiptStatus != 1) revert SourceTransactionFailed();

        // (3) the load-bearing fact: canonical stablecoin actually moved into the treasury.
        //     A look-alike ERC-20 named "USDC" fails here, which is the point.
        (address tokenFrom, uint256 tokenAmount) = _readCanonicalTransfer(receipt, cfg);

        // (4) self-reported metadata from our own gateway: who it is for, what it is for.
        (address sender, bytes32 beneficiaryId, uint256 claimedAmount, uint16 purposeCode) =
            _readRemittanceEvent(receipt, cfg);

        // (5) the two logs must describe the same movement, or the metadata is lying.
        if (tokenAmount != claimedAmount) revert AmountMismatch(tokenAmount, claimedAmount);
        if (tokenFrom != sender) revert SenderMismatch(tokenFrom, sender);

        pool.settle(beneficiaryId, tokenAmount, purposeCode, queryId);

        emit RemittanceSettled(queryId, beneficiaryId, sender, tokenAmount, purposeCode);
    }

    function _readCanonicalTransfer(EvmV1Decoder.ReceiptFields memory receipt, SourceConfig memory cfg)
        private
        pure
        returns (address from, uint256 value)
    {
        EvmV1Decoder.LogEntry[] memory logs = EvmV1Decoder.getLogsByEventSignature(receipt, TRANSFER_SIG);
        for (uint256 i = 0; i < logs.length; i++) {
            EvmV1Decoder.LogEntry memory log = logs[i];
            if (log.address_ != cfg.token) continue;      // must be the canonical token contract
            if (log.topics.length != 3) continue;
            if (_toAddress(log.topics[2]) != cfg.treasury) continue; // must land in the treasury
            if (log.data.length != 32) continue;
            return (_toAddress(log.topics[1]), abi.decode(log.data, (uint256)));
        }
        revert NoCanonicalTransfer();
    }

    function _readRemittanceEvent(EvmV1Decoder.ReceiptFields memory receipt, SourceConfig memory cfg)
        private
        pure
        returns (address sender, bytes32 beneficiaryId, uint256 amount, uint16 purposeCode)
    {
        EvmV1Decoder.LogEntry[] memory logs = EvmV1Decoder.getLogsByEventSignature(receipt, REMITTANCE_SENT_SIG);
        for (uint256 i = 0; i < logs.length; i++) {
            EvmV1Decoder.LogEntry memory log = logs[i];
            if (log.address_ != cfg.gateway) continue;    // must come from our registered gateway
            if (log.topics.length != 3) continue;
            if (log.data.length != 64) continue;
            (amount, purposeCode) = abi.decode(log.data, (uint256, uint16));
            return (_toAddress(log.topics[1]), log.topics[2], amount, purposeCode);
        }
        revert NoRemittanceEvent();
    }

    function _toAddress(bytes32 topic) private pure returns (address) {
        return address(uint160(uint256(topic)));
    }
}
