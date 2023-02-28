import { useMemo, useState } from 'react'

import * as fcl from '@onflow/fcl'

export function useFlowUser() {
  const [flowUser, setFlowUser] = useState<fcl.CurrentUserObject>()

  useMemo(() => {
    fcl
      .config()
      .put('accessNode.api', process.env.NEXT_PUBLIC_FLOW_ACCESS_API) // connect to Flow
      .put('discovery.wallet', process.env.NEXT_PUBLIC_WALLET_API)
      .put('flow.network', process.env.NEXT_PUBLIC_FLOW_NETWORK)
      .put('discovery.authn.endpoint', process.env.NEXT_PUBLIC_DISCOVERY_AUTH)
      .put('app.detail.icon', process.env.NEXT_PUBLIC_FLOW_APP_ICON)
      // use pop instead of default IFRAME/RPC option for security enforcement
      .put('discovery.wallet.method', process.env.NEXT_PUBLIC_WALLET_METHOD)
      .put('app.detail.title', process.env.NEXT_PUBLIC_FLOW_APP_TITLE)
    // Sets flowUser whenver it changes
    fcl.currentUser.subscribe(setFlowUser)
  }, [])

  return flowUser
}
