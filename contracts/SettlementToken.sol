// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/// @title SettlementToken
/// @notice Stand-in for the local settlement asset a partner actually wants to be paid in.
/// @dev Six decimals so it lines up 1:1 with USDC and no scaling math is needed anywhere.
///      In production this is whatever the corridor settles in; for the testnet demo the
///      liquidity provider mints their own inventory.
contract SettlementToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("Kirogi Settlement Unit", "KSU") Ownable(initialOwner) {}

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
