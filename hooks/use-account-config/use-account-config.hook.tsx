import { useEffect } from 'react'
import { useAsyncFn } from 'react-use'

import * as fcl from '@onflow/fcl'

import { useCadenceScripts } from '~/hooks/use-cadence-scripts'
import { useFlowUser } from '~/hooks/use-flow-user'

export function useFlowAccountConfiguration() {
  const flowUser = useFlowUser()
  const cadenceScripts = useCadenceScripts()
  const [configurationState, execConfiguration] = useAsyncFn(async () => {
    const txId = await fcl.mutate({
      cadence: cadenceScripts.configureAccountScript,
      limit: 9999,
    })

    return fcl.tx(txId).onceSealed()
  }, [cadenceScripts.configureAccountScript])

  const [isAccountConfiguredState, execIsAccountConfigured] = useAsyncFn(
    async (address: string) =>
      fcl.query({
        cadence: cadenceScripts.isAccountConfiguredScript,
        args: (arg, t) => [arg(address, t.Address)],
      }),
    [cadenceScripts.isAccountConfiguredScript],
  )

  const isLoading = cadenceScripts.isLoading || configurationState.loading

  // When configuration transaction completes, check if the account is configured
  useEffect(() => {
    if (!flowUser?.addr || configurationState.loading) return
    execIsAccountConfigured(flowUser.addr)
  }, [flowUser?.addr, configurationState])

  return {
    configured: isAccountConfiguredState.value,
    configure: execConfiguration,
    isLoading,
  }
}
