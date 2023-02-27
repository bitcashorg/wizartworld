import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '~/components/button'

export function NiftoryAuth() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <span className="self-center pr-5 align-middle">Signed in as {session.user?.email} </span>
        <Button onClick={() => signOut()} label=" Sign out" />
      </>
    )
  }
  return <Button onClick={() => signIn()} label="Sign in" variant="primary" />
}
