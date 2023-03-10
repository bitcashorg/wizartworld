import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useAsyncFn } from 'react-use'

import { Button } from '~/components/button'
import { NiftoryAuth } from '~/layouts/components/header/niftory-auth.component'
import { fetchJson } from '~/lib/fetch/fetch.lib'
import {
  createNFTSet,
  getAppUser,
  getNftModels,
  getNfts,
  getNiftoryApps,
  getSets,
  registerWallet,
  transferNft,
} from '~/services/niftory'

export default function PageNiftory() {
  const [data, setData] = useState({})
  const [state, mint] = useAsyncFn(async () =>
    fetchJson('/api/niftory/mint', {
      method: 'POST',
    }),
  )
  const session = useSession()

  const execCreateSet = async () => {
    try {
      setData(await createNFTSet())
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  const execGetNiftoryApps = async () => {
    try {
      setData(await getNiftoryApps())
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  const execGetAppUser = async () => {
    try {
      setData(await getAppUser())
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  const execGetNftModels = async () => {
    try {
      setData(await getNftModels())
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  const execGetNfts = async () => {
    try {
      setData(await getNfts())
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  const execRegisterWallet = async () => {
    try {
      setData(await registerWallet({ address: '' }))
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  const execNftTransfer = async () => {
    try {
      setData(await transferNft({ nftModelId: 'string', userId: 'string' }))
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  const execGetSets = async () => {
    try {
      setData(await getSets())
    } catch (error) {
      setData({ error: error as Error })
    }
  }

  return (
    <>
      <NiftoryAuth />
      <br /> <br />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
        <Button onClick={execCreateSet} label="create set" />
        <Button onClick={execGetNiftoryApps} label="get apps" />
        <Button onClick={execGetAppUser} label="get app user" />
        <Button onClick={execGetNftModels} label="get nft models" />
        <Button onClick={execGetNfts} label="get nfts" />
        <Button onClick={execRegisterWallet} label="register address nfts" />
        <Button onClick={execNftTransfer} label="transfer nft" />
        <Button onClick={execGetSets} label="get sets" />
        <Button onClick={mint} label="mint nft model" />
      </div>
      <br /> <br />
      <h2>Query Response </h2>
      <br />
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <br /> <br />
      <h2>Session </h2>
      <br />
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
      <h2>State </h2>
      <br />
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </>
  )
}
