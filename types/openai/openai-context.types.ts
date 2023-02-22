export type OpenAIContextStateProvider = {
  history: string
  wizartChat: OpenAIWizartChatType[]
  prompt: string
  error: string | null
}

export type OpenAIContextActionProvider = {
  type: 'change_input' | 'set_error' | 'set_history' | 'update_history' | 'update_chat'
  payload: string | null | OpenAIWizartChatType
}

export type OpenAIWizartChatType = {
  from: 'user' | 'wizart'
  message: string
}

export interface OpenAIContextProvider extends OpenAIContextStateProvider {
  updateChat: (payload: OpenAIWizartChatType) => void
  initiateChat: () => Promise<void>
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  generateChatCompletion: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}
