// import { GraphqlOperation } from '@genql/runtime'

// import { clientEnv } from '~/config/client'
// import { jwtIsExpired } from '~/lib/jwt'
// import { logger } from '~/lib/logger'

// import { createClient } from './generated'

// export { everything } from './generated'

// type GraphQLSdkProps = {
//   config?: RequestInit
//   jwt?: string
// }

// // Server side client
// export function getGraphQLSdk({ config, jwt }: GraphQLSdkProps = {}) {
//   return createClient({
//     fetcher: async (operation) => {
//       const headers = {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         ...(!jwtIsExpired(jwt)
//           ? { Authorization: `Bearer ${jwt}` }
//           : {
//               'X-Hasura-Admin-Secret': `${process.env.NEXT_PUBLIC_GRAPHQL_ADMIN_SECRET}`,
//             }),
//       }

//       logger.info(
//         '\n ==> GraphQL Query : \n',
//         JSON.stringify((operation as GraphqlOperation).query.replaceAll('"', '')),
//       )

//       let fetchResponse
//       try {
//         fetchResponse = fetch(clientEnv.services.graphql, {
//           method: 'POST',
//           headers,
//           body: JSON.stringify(operation),
//           ...config,
//         }).then((response) => response.json())
//       } catch (error) {
//         logger.error('Error in graphql fetcher', error)
//       }

//       return fetchResponse
//     },
//   })
// }

// export function getClientGraphQLSdk({ config }: Omit<GraphQLSdkProps, 'jwt'> = {}) {
//   let jwt = localStorage.getItem(clientEnv.auth.jwtKey) || undefined

//   return getGraphQLSdk({ jwt, config })
// }

export {}
