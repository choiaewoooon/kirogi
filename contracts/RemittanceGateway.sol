// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @title RemittanceGateway
/// @notice Source-chain (Ethereum) entry point. Deliberately thin, immutable, and ownerless.
/// @dev The gateway is NOT the source of truth. Every remittance pulls canonical USDC, so the
///      same transaction receipt carries a genuine `Transfer` log emitted by Circle's contract.
///      That log is what KirogiASC actually trusts on Creditcoin — an admin key can sign a
///      payment that never happened, but a USDC log cannot exist without USDC actually moving.
///      Our own event only carries self-reported metadata (who it is for, what it is for).
///
///      Receipt layout consumed by KirogiASC:
///        USDC Transfer  topics = [sig, from, to],           data = uint256 value
///        RemittanceSent topics = [sig, sender, beneficiary], data = abi.encode(uint256, uint16)
contract RemittanceGateway {
    using SafeERC20 for IERC20;

    /// @notice Canonical stablecoin this gateway accepts. Immutable: no admin can repoint it.
    IERC20 public immutable USDC;

    /// @notice Where pooled remittances are held until the liquidity provider sweeps them.
    /// @dev Immutable so that "the money went somewhere an admin chose later" is not possible.
    address public immutable TREASURY;

    event RemittanceSent(
        address indexed sender,
        bytes32 indexed beneficiaryId,
        uint256 amount,
        uint16 purposeCode
    );

    error ZeroAmount();
    error ZeroBeneficiary();

    constructor(IERC20 usdc, address treasury) {
        require(address(usdc) != address(0) && treasury != address(0), "zero address");
        USDC = usdc;
        TREASURY = treasury;
    }

    /// @param beneficiaryId Off-chain identity commitment of the receiving family.
    /// @param amount        USDC amount (6 decimals).
    /// @param purposeCode   What the money is for. Self-reported; see contract notes.
    function remit(bytes32 beneficiaryId, uint256 amount, uint16 purposeCode) external {
        if (amount == 0) revert ZeroAmount();
        if (beneficiaryId == bytes32(0)) revert ZeroBeneficiary();

        // Pulls canonical USDC. This is the call that puts an unforgeable Transfer log in the receipt.
        USDC.safeTransferFrom(msg.sender, TREASURY, amount);

        emit RemittanceSent(msg.sender, beneficiaryId, amount, purposeCode);
    }
}
