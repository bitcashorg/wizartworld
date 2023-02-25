import { chainConfig } from '~/config/chain'
import { clientEnv } from '~/config/client'
import { serverEnv } from '~/config/server'
import { logger } from '~/lib/logger'

import { createClient } from './generated'

export { everything } from './generated'

type GraphQLSdkProps = {
  config?: RequestInit
  jwt?: string
  isBackend?: boolean
}

// Server side client
export function getGraphQLSdk({ config, jwt, isBackend = true }: GraphQLSdkProps) {
  return createClient({
    fetcher: async (operation) => {
      const headers = {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
        'X-Niftory-API-Key': clientEnv.niftoryApiKey,
        ...(isBackend ? { 'X-Niftory-Client-Secret': serverEnv.niftorySecret } : {}),
      }
      console.log(headers)

      // logger.info(
      //   '\n ==> GraphQL Query : \n',
      //   JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', '')),
      // )

      let fetchResponse
      try {
        fetchResponse = fetch(chainConfig.flowTestnet.niftory, {
          method: 'POST',
          headers,
          body: JSON.stringify(operation),
          ...config,
        }).then((response) => response.json())
      } catch (error) {
        logger.error('Error in graphql fetcher', error)
      }

      return fetchResponse
    },
  })
}

export function getClientGraphQLSdk({ config }: Omit<GraphQLSdkProps, 'jwt'> = {}) {
  const jwt = localStorage.getItem(clientEnv.jwtLocalStorageKey) || undefined

  return getGraphQLSdk({ jwt, config, isBackend: false })
}
