import { GraphQLClient } from 'graphql-request'

let client: GraphQLClient

/**
 * Gets a GraphQL client from session.
 * @returns A GraphQL client.
 */
export async function getClientFromSession(session: any) {
  client =
    client ||
    new GraphQLClient(process.env.NEXT_PUBLIC_API_PATH || '', {
      headers: {
        'X-Niftory-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
        Authorization: `Bearer ${session.authToken}`,
      },
    })

  return client
}
