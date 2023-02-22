export const chainConfig = {
  solanaMainnet: {
    chainNamespace: 'solana',
    rpcTarget: 'https://api.mainnet-beta.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '0x1',
    displayName: 'Solana Mainnet Beta',
    ticker: 'SOL',
    tickerName: 'Solana',
  },
  solanaTestnet: {
    chainNamespace: 'solana',
    rpcTarget: 'https://api.testnet.solana.com',
    blockExplorer: 'https://explorer.solana.com',
    chainId: '0x2',
    displayName: 'testnet',
    ticker: 'sol',
    tickerName: 'solana',
  },
  polygon: {
    chainNamespace: 'eip155',
    chainId: '0x89', // hex of 137, polygon mainnet
    rpcTarget: 'https://rpc.ankr.com/polygon',
    // Avoid using public rpcTarget in production.
    // Use services like Infura, Quicknode etc
    displayName: 'Polygon Mainnet',
    blockExplorer: 'https://polygonscan.com',
    ticker: 'MATIC',
    tickerName: 'Matic',
  },
  mumbai: {
    chainNamespace: 'eip155',
    chainId: '0x13881', // hex of 80001, polygon testnet
    rpcTarget: 'https://rpc.ankr.com/polygon_mumbai',
    displayName: 'Polygon Mainnet',
    blockExplorer: 'https://mumbai.polygonscan.com/',
    ticker: 'MATIC',
    tickerName: 'Matic',
  },
} as const
