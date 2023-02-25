import { useSession } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '~/components/button'
import { createNFTSet, getAppUser, getNiftoryApps } from '~/services/niftory'
import { NiftoryAuth } from '~/views/niftory/niftory-auth.component'

export default function PageNiftory() {
  const [data, setData] = useState({})
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

  return (
    <>
      <NiftoryAuth />
      <br /> <br />
      <div className="flex gap-2">
        <Button onClick={execCreateSet} label="create set" />
        <Button onClick={execGetNiftoryApps} label="get apps" />
        <Button onClick={execGetAppUser} label="get app user" />
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
    </>
  )
}
