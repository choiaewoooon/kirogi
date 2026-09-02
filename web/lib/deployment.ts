/** Live deployment. Public addresses only — nothing here is a secret. */
export const DEPLOYMENT = {
  source: {
    name: "Ethereum Sepolia",
    chainKey: 1,
    chainId: 11155111,
    rpc: "https://ethereum-sepolia-rpc.publicnode.com",
    explorer: "https://sepolia.etherscan.io",
    gateway: "0x1C2152e3fAbC8Ba1314F60d25Bb6f306Ef9Ab053",
    usdc: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    treasury: "0x86CF30f751e0138A3272e3A148eF59Fd77C7366F",
  },
  settlement: {
    name: "Creditcoin CC3 Testnet",
    chainId: 102031,
    rpc: "https://rpc.cc3-testnet.creditcoin.network",
    explorer: "https://creditcoin-testnet.blockscout.com",
    asc: "0x4Ea7D8d61BC3e0b3fe28496e2eeD7506C3cFcD45",
    pool: "0xC471E417383C01c0053F79660224428Edd37e8e3",
    token: "0xA57eEa3D273d8558F428602fa1ac66cE0b93a441",
    partner: "0x92E8B717f444c1AB0e8fa9439c5AFbB556Dfa51b",
    beneficiaryId: "0x5a1584d7faba43a9baca8c071d9ba2a56db2b16d07eacdf97f5577f764cb25d5",
  },
  precompiles: {
    blockProver: "0x0000000000000000000000000000000000000FD2",
    chainInfo: "0x0000000000000000000000000000000000000FD3",
  },
  /** The crossing that actually happened. Every hash below is live on a public explorer. */
  proven: {
    sourceTx: "0x0a31dd52776f8d656cc5be3178a367f8283584e2cd7396038880dfb0b2c02e2b",
    sourceBlock: 11604757,
    amountUsdc: "12.000000",
    settlementTx: "0x9c0857ec8a7e37bcc6e8c01221153101d4e753850191fd376b4b8c0ede550307",
    settlementBlock: 5405280,
    settlementGas: 441364,
    attestationWaitSeconds: 450,
    merkleSiblings: 8,
    continuityRoots: 4,
    txIndex: 139,
  },
  rejected: {
    sourceTx: "0xb17c17de63ce94d14534aa610212f41f6fc6f54ec01f06fa3e976c67482606e0",
    selector: "0xc60cdba1",
    error: "SourceTransactionFailed()",
  },
} as const;
