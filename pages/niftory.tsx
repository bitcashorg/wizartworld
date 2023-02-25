import { useState } from 'react'

import { Button } from '~/components/button'
import { createNFTSet } from '~/services/niftory'
import { NiftoryAuth } from '~/views/niftory/niftory-auth.component'

export default function PageNiftory() {
  const [data, setData] = useState({})
  return (
    <>
      <Button onClick={async () => setData(await createNFTSet())} label="create set" />
      <NiftoryAuth />
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  )
}
