import { BaseClient, Issuer, TokenSet, custom } from 'openid-client'

import { clientEnv } from '~/config/client'

let client: BaseClient
let token: TokenSet

custom.setHttpOptionsDefaults({ timeout: 30000 })

async function getOAuthClient() {
  if (!client) {
    const issuer = await Issuer.discover(clientEnv.niftory.authIssuer)
    client = new issuer.Client({
      client_id: clientEnv.niftory.clientId,
      client_secret: clientEnv.niftory.clientSecret,
    })
  }

  return client
}

/**
 * Gets a client credentials token.
 * @returns The client credentials token that represents the client itself.
 */
export async function getClientCredentialsToken() {
  const client = await getOAuthClient()

  if (!token || token.expired()) {
    token = await client.grant({ grant_type: 'client_credentials' })
  }

  return token.access_token
}

/**
 * Refreshes an auth token.
 * @param refreshToken The refresh token to use to refresh the auth token
 * @returns A refreshed token set
 */
export async function refreshAuthToken(refreshToken: string) {
  const client = await getOAuthClient()

  return await client.refresh(refreshToken)
}
