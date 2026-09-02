// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/// @title SettlementPool
/// @notice Pre-funded liquidity on Creditcoin that pays settlement partners (schools, clinics)
///         the moment an Ethereum deposit is cryptographically proven.
/// @dev This is the piece that makes the credit real rather than an IOU. Value never crosses a
///      bridge: the liquidity provider keeps inventory on both chains and nets off-chain, exactly
///      as remittance corridors already work. Attestcoin supplies the only thing that is missing
///      from that arrangement today — a trustless answer to "did the sender really pay?".
contract SettlementPool is Ownable {
    using SafeERC20 for IERC20;

    /// @notice Token paid out to settlement partners. Same decimals as USDC (6) to avoid scaling.
    IERC20 public immutable PAYOUT_TOKEN;

    /// @notice The only contract allowed to trigger a payout: the verified-proof consumer.
    address public asc;

    /// @notice beneficiaryId => the settlement partner that receives on their behalf.
    mapping(bytes32 => address) public settlementAddressOf;

    /// @notice Cumulative amount settled per beneficiary. Read by the frontend.
    mapping(bytes32 => uint256) public settledTotalOf;

    /// @notice Number of settlements per beneficiary. With settledTotalOf this is the whole
    ///         repayment record — the thing a lender would one day read. We only write it.
    mapping(bytes32 => uint32) public settlementCountOf;

    /// @notice beneficiaryId => bitmask of purpose codes the partner accepts (bit n = code n).
    /// @dev This is the sender's intent made enforceable. A school registered for tuition,
    ///      dormitory and books cannot be paid for anything else, however valid the proof is.
    mapping(bytes32 => uint32) public allowedPurposesOf;

    event AscUpdated(address indexed asc);
    event SettlementPartnerRegistered(bytes32 indexed beneficiaryId, address indexed partner, uint32 allowedPurposes);
    event Settled(
        bytes32 indexed beneficiaryId,
        address indexed partner,
        uint256 amount,
        uint16 purposeCode,
        bytes32 indexed queryId
    );

    error NotAsc();
    error NoSettlementPartner(bytes32 beneficiaryId);
    error InsufficientLiquidity(uint256 requested, uint256 available);
    error PurposeNotAllowed(bytes32 beneficiaryId, uint16 purposeCode);

    modifier onlyAsc() {
        if (msg.sender != asc) revert NotAsc();
        _;
    }

    constructor(IERC20 payoutToken, address initialOwner) Ownable(initialOwner) {
        require(address(payoutToken) != address(0), "zero token");
        PAYOUT_TOKEN = payoutToken;
    }

    function setAsc(address asc_) external onlyOwner {
        asc = asc_;
        emit AscUpdated(asc_);
    }

    /// @dev Whitelisting settlement partners needs an operator. We do not pretend otherwise —
    ///      this is one of the trust assumptions stated openly in the submission.
    function registerSettlementPartner(bytes32 beneficiaryId, address partner, uint32 allowedPurposes)
        external
        onlyOwner
    {
        require(beneficiaryId != bytes32(0) && partner != address(0), "zero arg");
        require(allowedPurposes != 0, "no purposes");
        settlementAddressOf[beneficiaryId] = partner;
        allowedPurposesOf[beneficiaryId] = allowedPurposes;
        emit SettlementPartnerRegistered(beneficiaryId, partner, allowedPurposes);
    }

    /// @notice Whether `purposeCode` is one the partner behind `beneficiaryId` accepts.
    function purposeAllowed(bytes32 beneficiaryId, uint16 purposeCode) public view returns (bool) {
        if (purposeCode >= 32) return false;
        return allowedPurposesOf[beneficiaryId] & (uint32(1) << purposeCode) != 0;
    }

    /// @notice Pay the registered partner. Only reachable behind a verified Attestcoin proof.
    function settle(bytes32 beneficiaryId, uint256 amount, uint16 purposeCode, bytes32 queryId)
        external
        onlyAsc
    {
        address partner = settlementAddressOf[beneficiaryId];
        if (partner == address(0)) revert NoSettlementPartner(beneficiaryId);
        // The proof says the money was sent. This says what it was sent *for* is what the
        // receiver is registered to accept. Both have to hold.
        if (!purposeAllowed(beneficiaryId, purposeCode)) revert PurposeNotAllowed(beneficiaryId, purposeCode);

        uint256 available = PAYOUT_TOKEN.balanceOf(address(this));
        if (amount > available) revert InsufficientLiquidity(amount, available);

        settledTotalOf[beneficiaryId] += amount;
        settlementCountOf[beneficiaryId] += 1;
        PAYOUT_TOKEN.safeTransfer(partner, amount);

        emit Settled(beneficiaryId, partner, amount, purposeCode, queryId);
    }

    /// @notice Liquidity provider withdraws unused inventory.
    function withdraw(address to, uint256 amount) external onlyOwner {
        PAYOUT_TOKEN.safeTransfer(to, amount);
    }
}
