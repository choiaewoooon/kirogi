// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {KirogiASC} from "../contracts/KirogiASC.sol";
import {SettlementPool} from "../contracts/SettlementPool.sol";
import {RemittanceGateway} from "../contracts/RemittanceGateway.sol";
import {INativeQueryVerifier} from "../contracts/vendor/VerifierInterface.sol";

// bit n = purpose code n: 1 tuition · 2 dormitory · 3 books. Nothing else.
uint32 constant SCHOOL_PURPOSES = (1 << 1) | (1 << 2) | (1 << 3);

contract TestToken is ERC20 {
    constructor() ERC20("Test USDC", "tUSDC") {}
    function mint(address to, uint256 amount) external { _mint(to, amount); }
    function decimals() public pure override returns (uint8) { return 6; }
}

/// @dev The proof fixture is a real, already-attested Sepolia transaction captured once by
///      `scripts/fetch_fixture.mjs`. Replaying it offline keeps the 8-10 minute attestation
///      delay and the 9-queries-per-day faucet budget out of the edit/test loop entirely.
abstract contract FixtureTest is Test {
    address constant PRECOMPILE = 0x0000000000000000000000000000000000000FD2;
    address constant CIRCLE_USDC_SEPOLIA = 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238;

    bytes fixtureTxBytes;
    address fixtureFrom;
    address fixtureTo;
    uint256 fixtureValue;
    uint64 fixtureChainKey;
    uint64 fixtureHeight;

    function _loadFixture() internal {
        string memory json = vm.readFile("fixtures/usdc-transfer.json");
        fixtureTxBytes = vm.parseJsonBytes(json, ".txBytes");
        fixtureFrom = vm.parseJsonAddress(json, ".expected.from");
        fixtureTo = vm.parseJsonAddress(json, ".expected.to");
        fixtureValue = vm.parseJsonUint(json, ".expected.value");
        fixtureChainKey = uint64(vm.parseJsonUint(json, ".chainKey"));
        fixtureHeight = uint64(vm.parseJsonUint(json, ".headerNumber"));
    }

    /// @dev ASCBase pins the verifier to 0x0FD2 as an immutable, so it cannot be injected.
    ///      Mocking the precompile is the only way to exercise `execute()` locally.
    function _mockVerifier(bool verified) internal {
        vm.mockCall(
            PRECOMPILE, abi.encodeWithSelector(INativeQueryVerifier.verifyAndEmit.selector), abi.encode(verified)
        );
        vm.mockCall(
            PRECOMPILE, abi.encodeWithSelector(INativeQueryVerifier.calculateTxIndex.selector), abi.encode(uint64(7))
        );
    }

    function _submit(KirogiASC asc, uint8 action) internal returns (bool) {
        INativeQueryVerifier.MerkleProofEntry[] memory siblings = new INativeQueryVerifier.MerkleProofEntry[](1);
        siblings[0] = INativeQueryVerifier.MerkleProofEntry({hash: bytes32(uint256(1)), isLeft: true});
        bytes32[] memory roots = new bytes32[](1);
        roots[0] = bytes32(uint256(2));
        return asc.execute(
            action, fixtureChainKey, fixtureHeight, fixtureTxBytes, bytes32(uint256(3)), siblings, bytes32(uint256(4)), roots
        );
    }
}

contract KirogiASCTest is FixtureTest {
    KirogiASC asc;
    SettlementPool pool;
    TestToken payoutToken;

    address constant GATEWAY = address(0x6A7E);
    uint8 constant ETH_SEPOLIA = 1;

    function setUp() public {
        _loadFixture();
        _mockVerifier(true);

        payoutToken = new TestToken();
        pool = new SettlementPool(IERC20(address(payoutToken)), address(this));
        asc = new KirogiASC(address(this));
        pool.setAsc(address(asc));
        asc.setPool(pool);
        payoutToken.mint(address(pool), 1_000_000e6);
    }

    /// The canonical USDC log in a real receipt is found and matched. Reaching
    /// `NoRemittanceEvent` proves step (3) passed on genuine bytes -- this transaction is a
    /// stranger's transfer, so it correctly has no gateway event of ours.
    function test_ParsesCanonicalTransferFromRealProof() public {
        asc.configureSource(ETH_SEPOLIA, fixtureChainKey, GATEWAY, CIRCLE_USDC_SEPOLIA, fixtureTo);
        vm.expectRevert(KirogiASC.NoRemittanceEvent.selector);
        _submit(asc, ETH_SEPOLIA);
    }

    /// A look-alike ERC-20 also called "USDC" must not settle. Sepolia really does host more
    /// than one token with that name, which is exactly why the address is pinned.
    function test_RejectsLookalikeToken() public {
        address lookalike = 0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8;
        asc.configureSource(ETH_SEPOLIA, fixtureChainKey, GATEWAY, lookalike, fixtureTo);
        vm.expectRevert(KirogiASC.NoCanonicalTransfer.selector);
        _submit(asc, ETH_SEPOLIA);
    }

    function test_RejectsTransferToWrongTreasury() public {
        asc.configureSource(ETH_SEPOLIA, fixtureChainKey, GATEWAY, CIRCLE_USDC_SEPOLIA, address(0xDEAD));
        vm.expectRevert(KirogiASC.NoCanonicalTransfer.selector);
        _submit(asc, ETH_SEPOLIA);
    }

    function test_RejectsUnconfiguredSource() public {
        vm.expectRevert(abi.encodeWithSelector(KirogiASC.UnknownSource.selector, uint8(9)));
        _submit(asc, 9);
    }

    function test_RejectsDisabledSource() public {
        asc.configureSource(ETH_SEPOLIA, fixtureChainKey, GATEWAY, CIRCLE_USDC_SEPOLIA, fixtureTo);
        asc.setSourceEnabled(ETH_SEPOLIA, false);
        vm.expectRevert(abi.encodeWithSelector(KirogiASC.UnknownSource.selector, ETH_SEPOLIA));
        _submit(asc, ETH_SEPOLIA);
    }

    /// A failed proof must not reach any business logic.
    function test_RejectsUnverifiedProof() public {
        asc.configureSource(ETH_SEPOLIA, fixtureChainKey, GATEWAY, CIRCLE_USDC_SEPOLIA, fixtureTo);
        _mockVerifier(false);
        vm.expectRevert("Proof of inclusion verification failed");
        _submit(asc, ETH_SEPOLIA);
    }

    /// Gateway addresses identify which source config a submitter is allowed to select, so
    /// they must never be shared between two chains.
    function test_GatewayAddressCannotBeReused() public {
        asc.configureSource(ETH_SEPOLIA, 1, GATEWAY, CIRCLE_USDC_SEPOLIA, fixtureTo);
        vm.expectRevert("gateway already registered");
        asc.configureSource(3, 3, GATEWAY, CIRCLE_USDC_SEPOLIA, fixtureTo);
    }

    /// Sepolia and mainnet live side by side as two actions of the same contract, each with
    /// its own gateway, token and treasury — what the live deployment does.
    function test_TwoSourceChainsCoexist() public {
        address mainnetGateway = address(0x53B9);
        address mainnetUsdc = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
        asc.configureSource(ETH_SEPOLIA, 1, GATEWAY, CIRCLE_USDC_SEPOLIA, fixtureTo);
        asc.configureSource(2, 3, mainnetGateway, mainnetUsdc, address(0x7EA5));
        assertTrue(asc.gatewayRegistered(GATEWAY));
        assertTrue(asc.gatewayRegistered(mainnetGateway));
        (uint64 k1,,,,) = asc.sourceConfigs(ETH_SEPOLIA);
        (uint64 k2, address g2, address t2,,) = asc.sourceConfigs(2);
        assertEq(k1, 1);
        assertEq(k2, 3);
        assertEq(g2, mainnetGateway);
        assertEq(t2, mainnetUsdc);
    }

    function test_ReconfiguringSameActionReleasesOldGateway() public {
        asc.configureSource(ETH_SEPOLIA, 1, GATEWAY, CIRCLE_USDC_SEPOLIA, fixtureTo);
        asc.configureSource(ETH_SEPOLIA, 1, address(0xBEEF), CIRCLE_USDC_SEPOLIA, fixtureTo);
        assertFalse(asc.gatewayRegistered(GATEWAY));
        assertTrue(asc.gatewayRegistered(address(0xBEEF)));
    }
}

contract SettlementPoolTest is Test {
    SettlementPool pool;
    TestToken token;
    address asc = address(0xA5C);
    address school = address(0x5C4001);
    bytes32 constant BENEFICIARY = keccak256("family-01");

    function setUp() public {
        token = new TestToken();
        pool = new SettlementPool(IERC20(address(token)), address(this));
        pool.setAsc(asc);
        token.mint(address(pool), 1_000e6);
    }

    function test_OnlyAscCanSettle() public {
        pool.registerSettlementPartner(BENEFICIARY, school, SCHOOL_PURPOSES);
        vm.expectRevert(SettlementPool.NotAsc.selector);
        pool.settle(BENEFICIARY, 1e6, 1, bytes32(0));
    }

    function test_SettlesToRegisteredPartner() public {
        pool.registerSettlementPartner(BENEFICIARY, school, SCHOOL_PURPOSES);
        vm.prank(asc);
        pool.settle(BENEFICIARY, 271e6, 1, keccak256("q"));
        assertEq(token.balanceOf(school), 271e6);
        assertEq(pool.settledTotalOf(BENEFICIARY), 271e6);
    }

    function test_RejectsUnregisteredBeneficiary() public {
        vm.prank(asc);
        vm.expectRevert(abi.encodeWithSelector(SettlementPool.NoSettlementPartner.selector, BENEFICIARY));
        pool.settle(BENEFICIARY, 1e6, 1, bytes32(0));
    }

    /// A valid proof for a purpose the partner does not accept is refused. The sender's
    /// intent is enforced where the money is paid out, not just recorded.
    function test_RejectsPurposeNotAllowed() public {
        pool.registerSettlementPartner(BENEFICIARY, school, SCHOOL_PURPOSES);
        vm.prank(asc);
        vm.expectRevert(abi.encodeWithSelector(SettlementPool.PurposeNotAllowed.selector, BENEFICIARY, uint16(4)));
        pool.settle(BENEFICIARY, 1e6, 4, keccak256("exam-fee"));
        assertEq(token.balanceOf(school), 0);
    }

    function test_PurposeCodesAbove31NeverAllowed() public {
        pool.registerSettlementPartner(BENEFICIARY, school, type(uint32).max);
        assertTrue(pool.purposeAllowed(BENEFICIARY, 31));
        assertFalse(pool.purposeAllowed(BENEFICIARY, 32));
    }

    function test_CountsEverySettlement() public {
        pool.registerSettlementPartner(BENEFICIARY, school, SCHOOL_PURPOSES);
        vm.startPrank(asc);
        pool.settle(BENEFICIARY, 5e6, 1, keccak256("q1"));
        pool.settle(BENEFICIARY, 7e6, 2, keccak256("q2"));
        vm.stopPrank();
        assertEq(pool.settlementCountOf(BENEFICIARY), 2);
        assertEq(pool.settledTotalOf(BENEFICIARY), 12e6);
    }

    function test_RejectsWhenLiquidityShort() public {
        pool.registerSettlementPartner(BENEFICIARY, school, SCHOOL_PURPOSES);
        vm.prank(asc);
        vm.expectRevert(abi.encodeWithSelector(SettlementPool.InsufficientLiquidity.selector, 2_000e6, 1_000e6));
        pool.settle(BENEFICIARY, 2_000e6, 1, bytes32(0));
    }
}

contract RemittanceGatewayTest is Test {
    RemittanceGateway gateway;
    TestToken usdc;
    address treasury = address(0x7BEA);
    address sender = address(0x5E4D);
    bytes32 constant BENEFICIARY = keccak256("family-01");

    function setUp() public {
        usdc = new TestToken();
        gateway = new RemittanceGateway(IERC20(address(usdc)), treasury);
        usdc.mint(sender, 1_000e6);
        vm.prank(sender);
        usdc.approve(address(gateway), type(uint256).max);
    }

    function test_RemitMovesCanonicalTokenAndEmits() public {
        vm.expectEmit(true, true, false, true, address(gateway));
        emit RemittanceGateway.RemittanceSent(sender, BENEFICIARY, 271e6, 1);
        vm.prank(sender);
        gateway.remit(BENEFICIARY, 271e6, 1);
        assertEq(usdc.balanceOf(treasury), 271e6);
    }

    function test_RejectsZeroAmount() public {
        vm.prank(sender);
        vm.expectRevert(RemittanceGateway.ZeroAmount.selector);
        gateway.remit(BENEFICIARY, 0, 1);
    }

    function test_RejectsZeroBeneficiary() public {
        vm.prank(sender);
        vm.expectRevert(RemittanceGateway.ZeroBeneficiary.selector);
        gateway.remit(bytes32(0), 1e6, 1);
    }
}
