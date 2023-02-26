import { chainConfig } from '~/config/chain'
import { clientEnv } from '~/config/client'
import { serverEnv } from '~/config/server'
import { getClientCredentialsToken } from '~/lib/auth'
import { logger } from '~/lib/logger'

import { createClient } from './generated'

export { everything } from './generated'

export async function getBackendEndGraphQLClient() {
  const jwt = await getClientCredentialsToken()
  return createClient({
    fetcher: async (operation) => {
      const headers = {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
        'X-Niftory-API-Key': clientEnv.niftoryApiKey,
        'X-Niftory-Client-Secret': serverEnv.niftorySecret,
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
        }).then((response) => response.json())
      } catch (error) {
        logger.error('Error in graphql fetcher', error)
      }

      return fetchResponse
    },
  })
}
