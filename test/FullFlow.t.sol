// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {KirogiASC} from "../contracts/KirogiASC.sol";
import {SettlementPool} from "../contracts/SettlementPool.sol";
import {SettlementToken} from "../contracts/SettlementToken.sol";
import {INativeQueryVerifier} from "../contracts/vendor/VerifierInterface.sol";

/// @dev Replays two real Sepolia remittances captured by `scripts/submit_proof.ts --fixture`.
///      One succeeded on Ethereum, one reverted. Both were also submitted against the live
///      Creditcoin deployment; these tests are the offline mirror of that, so the whole
///      rejection surface can be re-checked in milliseconds instead of ~8 minutes per attempt.
contract FullFlowTest is Test {
    address constant PRECOMPILE = 0x0000000000000000000000000000000000000FD2;
    uint8 constant ACTION = 1;

    KirogiASC asc;
    SettlementPool pool;
    SettlementToken token;

    struct Fixture {
        bytes txBytes;
        bytes32 merkleRoot;
        INativeQueryVerifier.MerkleProofEntry[] siblings;
        bytes32 lowerEndpointDigest;
        bytes32[] continuityRoots;
        uint64 chainKey;
        uint64 height;
    }

    address gateway;
    address usdc;
    address treasury;
    bytes32 beneficiaryId;
    address partner;

    function setUp() public {
        string memory json = vm.readFile("fixtures/full-flow-success.json");
        gateway = vm.parseJsonAddress(json, ".sourceConfig.gateway");
        usdc = vm.parseJsonAddress(json, ".sourceConfig.token");
        treasury = vm.parseJsonAddress(json, ".sourceConfig.treasury");
        beneficiaryId = vm.parseJsonBytes32(json, ".sourceConfig.beneficiaryId");
        partner = vm.parseJsonAddress(json, ".sourceConfig.settlementPartner");

        token = new SettlementToken(address(this));
        pool = new SettlementPool(IERC20(address(token)), address(this));
        asc = new KirogiASC(address(this));
        pool.setAsc(address(asc));
        asc.setPool(pool);
        token.mint(address(pool), 1_000_000e6);
        pool.registerSettlementPartner(beneficiaryId, partner);
        asc.configureSource(ACTION, 1, gateway, usdc, treasury);

        vm.mockCall(
            PRECOMPILE, abi.encodeWithSelector(INativeQueryVerifier.verifyAndEmit.selector), abi.encode(true)
        );
    }

    function _load(string memory name) internal returns (Fixture memory f) {
        string memory json = vm.readFile(string.concat("fixtures/", name, ".json"));
        f.txBytes = vm.parseJsonBytes(json, ".txBytes");
        f.merkleRoot = vm.parseJsonBytes32(json, ".merkleProof.root");
        f.lowerEndpointDigest = vm.parseJsonBytes32(json, ".continuityProof.lowerEndpointDigest");
        f.continuityRoots = vm.parseJsonBytes32Array(json, ".continuityProof.roots");
        f.chainKey = uint64(vm.parseJsonUint(json, ".chainKey"));
        f.height = uint64(vm.parseJsonUint(json, ".headerNumber"));

        bytes32[] memory hashes = vm.parseJsonBytes32Array(json, ".merkleProof.siblingHashes");
        bool[] memory isLeft = vm.parseJsonBoolArray(json, ".merkleProof.siblingIsLeft");
        f.siblings = new INativeQueryVerifier.MerkleProofEntry[](hashes.length);
        for (uint256 i = 0; i < hashes.length; i++) {
            f.siblings[i] = INativeQueryVerifier.MerkleProofEntry({hash: hashes[i], isLeft: isLeft[i]});
        }
        // The real txIndex comes from the precompile; mock it to the captured value so the
        // replay guard keys on the same query id the live chain used.
        vm.mockCall(
            PRECOMPILE,
            abi.encodeWithSelector(INativeQueryVerifier.calculateTxIndex.selector),
            abi.encode(uint64(vm.parseJsonUint(json, ".txIndex")))
        );
    }

    function _submit(Fixture memory f) internal returns (bool) {
        return asc.execute(
            ACTION, f.chainKey, f.height, f.txBytes, f.merkleRoot, f.siblings, f.lowerEndpointDigest, f.continuityRoots
        );
    }

    /// The whole point, end to end: a proven Ethereum remittance pays a settlement partner
    /// on Creditcoin. Value never crossed a bridge -- only the fact did.
    function test_SettlesRealRemittanceToPartner() public {
        Fixture memory f = _load("full-flow-success");
        assertEq(token.balanceOf(partner), 0);

        _submit(f);

        assertEq(token.balanceOf(partner), 12e6, "partner paid");
        assertEq(pool.settledTotalOf(beneficiaryId), 12e6);
        assertEq(token.balanceOf(address(pool)), 1_000_000e6 - 12e6, "liquidity drawn down");
    }

    /// A proof is a bearer object. Presenting it twice must not pay twice.
    function test_RejectsReplayOfSameProof() public {
        Fixture memory f = _load("full-flow-success");
        _submit(f);
        vm.expectRevert("Query already processed");
        _submit(f);
        assertEq(token.balanceOf(partner), 12e6, "paid exactly once");
    }

    /// The precompile proves inclusion, not success. This remittance reverted on Ethereum;
    /// without the status check it would still have been "proven" and paid out.
    /// The live chain rejected this same proof with SourceTransactionFailed() (0xc60cdba1).
    function test_RejectsRevertedSourceTransaction() public {
        Fixture memory f = _load("full-flow-failed");
        vm.expectRevert(KirogiASC.SourceTransactionFailed.selector);
        _submit(f);
        assertEq(token.balanceOf(partner), 0, "nothing paid");
    }

    /// Repointing the config at a look-alike token makes the same genuine proof unusable.
    function test_RejectsWhenTokenIsNotCanonical() public {
        asc.configureSource(ACTION, 1, gateway, address(0xBAD), treasury);
        Fixture memory f = _load("full-flow-success");
        vm.expectRevert(KirogiASC.NoCanonicalTransfer.selector);
        _submit(f);
    }

    /// The gateway log carries the beneficiary. A proof for someone else's remittance cannot
    /// be redirected by registering a different partner.
    function test_PaysOnlyTheBeneficiaryNamedInTheProof() public {
        bytes32 other = keccak256("someone-else");
        address otherPartner = address(0xC0FFEE);
        pool.registerSettlementPartner(other, otherPartner);

        Fixture memory f = _load("full-flow-success");
        _submit(f);

        assertEq(token.balanceOf(otherPartner), 0, "unrelated partner untouched");
        assertEq(token.balanceOf(partner), 12e6);
    }
}
