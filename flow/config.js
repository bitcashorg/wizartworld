import { config } from '@onflow/fcl'

config({
  'app.detail.title': 'BitcashFlow',
  'app.detail.icon': 'https://unavatar.io/twitter/muttonia',
  // 'accessNode.api': process.env.NEXT_PUBLIC_ACCESS_NODE_API,
  // 'discovery.wallet': process.env.NEXT_PUBLIC_DISCOVERY_WALLET,
  // '0xProfile': process.env.NEXT_PUBLIC_CONTRACT_PROFILE, // The account address where the smart contract lives
  'accessNode.api': 'https://rest-testnet.onflow.org', // Mainnet: "https://rest-mainnet.onflow.org"
  'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn', // Mainnet: "https://fcl-discovery.onflow.org/authn"
  '0xProfile': '0xba1132bc08f82fe2', // The account address where the Profile smart contract lives on Testnet
})
