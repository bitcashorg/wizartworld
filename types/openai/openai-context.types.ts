export type OpenAIContextStateProvider = {
  history: string
  prompt: string
  error: string | null
}

export type OpenAIContextActionProvider = {
  type: 'change_input' | 'set_error' | 'set_history'
  payload: string | null
}

export interface OpenAIContextProvider extends OpenAIContextStateProvider {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  generateChatCompletion: () => Promise<void>
}
