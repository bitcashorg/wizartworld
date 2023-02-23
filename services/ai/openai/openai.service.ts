import { fetchJson } from '~/lib/fetch'
import { OpenAIGetTextCompletion } from '~/types'

export const getTextCompletion = async (data: OpenAIGetTextCompletion) =>
  // ? Using fetch instead fetchJSON (currently not working). TODO: An Error Handler Is Required
  await fetch('/api/wizart', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
