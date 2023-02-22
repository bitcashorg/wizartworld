import { getWeb3AuthProvider } from '~/services/web3auth'
import { ethers } from 'ethers'

export function createEthersProvider() {
  return new ethers.providers.Web3Provider(getWeb3AuthProvider())
}

export async function getChainId() {
  const provider = createEthersProvider()
  return provider.getNetwork()
}

export async function getAddress() {
  const provider = createEthersProvider()
  const signer = provider.getSigner()
  return signer.getAddress()
}

export async function getBalance() {
  const provider = createEthersProvider()
  const signer = provider.getSigner()
  const address = await signer.getAddress()
  return ethers.utils.formatEther(
    await provider.getBalance(address), // Balance is in wei
  )
}

export async function pushTransaction() {
  const provider = createEthersProvider()
  const signer = provider.getSigner()

  const destination = '0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56'

  // Convert 1 ether to wei
  const amount = ethers.utils.parseEther('0.001')

  // Submit transaction to the blockchain
  const tx = await signer.sendTransaction({
    to: destination,
    value: amount,
    maxPriorityFeePerGas: '5000000000', // Max priority fee per gas
    maxFeePerGas: '6000000000000', // Max fee per gas
  })

  // Wait for transaction to be mined
  return tx.wait()
}

export async function signMessage(message: string) {
  const provider = createEthersProvider()
  const signer = provider.getSigner()
  return signer.signMessage(message)
}
