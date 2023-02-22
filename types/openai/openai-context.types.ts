export type OpenAIContextStateProvider = {
  history: string
  prompt: string
  error: string | null
}

export type OpenAIContextActionProvider = {
  type: 'change_input' | 'set_error' | 'set_history' | 'update_prompt'
  payload: string | null
}

export interface OpenAIContextProvider extends OpenAIContextStateProvider {
  initiateChat: () => Promise<void>
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  generateChatCompletion: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}
