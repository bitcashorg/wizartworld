import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { serverResponse } from '~/lib/ssr'
import { Profile } from '~/views/profile'

export default function PageProfile({ profile }: PageProfileProps) {
  return <Profile profile={profile} />
}

export const getServerSideProps: GetServerSideProps<any, PageProfileParams> = async (context) => {
  return serverResponse(context, async ({ session }) => {
    const profile = {}
    if (!profile) return { notFound: true }
    return {
      props: {
        profile,
      },
    }
  })
}

interface PageProfileParams extends ParsedUrlQuery {}

interface PageProfileProps {
  profile: {}
}
