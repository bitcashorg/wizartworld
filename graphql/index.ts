import { getToken } from 'next-auth/jwt'

import { GraphqlOperation } from '@genql/runtime'

import { chainConfig } from '~/config/chain'
import { clientEnv } from '~/config/client'
import { jwtIsExpired } from '~/lib/jwt'
import { logger } from '~/lib/logger'

import { createClient } from './generated'

export { everything } from './generated'

type GraphQLSdkProps = {
  config?: RequestInit
  jwt?: string
}

// Server side client
export function getGraphQLSdk({ config, jwt }: GraphQLSdkProps = {}) {
  return createClient({
    fetcher: async (operation) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(!jwtIsExpired(jwt)
          ? { Authorization: `Bearer ${jwt}` }
          : {
              'X-Niftory-API-Key': clientEnv.niftoryApiKey,
            }),
      }

      logger.info(
        '\n ==> GraphQL Query : \n',
        JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', '')),
      )

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
  let jwt = localStorage.getItem(clientEnv.jwtLocalStorageKey) || undefined

  return getGraphQLSdk({ jwt, config })
}
