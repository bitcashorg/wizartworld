import { OperationContext, OperationResult } from 'urql'
import { useMutation } from 'urql'

import type {
  GraphQLQuery as GraphQLMutation,
  GraphQLQueryType as GraphQLMutationType,
} from './types'

export type GraphQLMutationResult<
  Outputs extends Record<string, unknown>,
  Variables extends object = object,
> = GraphQLMutationType<Outputs> & {
  fetching: boolean
  error: Error
  executeMutation: (variables: Variables, context?: Partial<OperationContext>) => Promise<void>
}

export function useGraphQLMutation<
  X extends GraphQLMutationType<Record<string, unknown>>,
  Y extends object = object,
>(query: GraphQLMutation<X>): any {
  const [result, executeMutationInternal] = useMutation<GraphQLMutationType<X>>(query)
  const { data, fetching, error } = result
  const executeMutation = async (variables?: Y, context?: Partial<OperationContext>) => {
    const executeMutationResponse = await executeMutationInternal({
      ...variables,
      context,
    }).then((res: any) => {
      if (res.error) {
        throw { ...res.error }
      }
    })

    return executeMutationResponse
  }
  return {
    ...data,
    fetching,
    error,
    executeMutation,
  }
}
