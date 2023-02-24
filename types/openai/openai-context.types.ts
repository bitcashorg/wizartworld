export type OpenAIContextStateProvider = {
  artCategory: string
  artStyle: string
  artInspiration: string
  history: string
  wizartChat: {
    user: string
    wizart: string
  }
  prompt: string
  error: string | null
}

export type OpenAIContextActionProvider = {
  type:
    | 'change_input'
    | 'set_error'
    | 'set_history'
    | 'update_history'
    | 'update_chat'
    | 'set_art_inspiration'
    | 'set_art_style'
    | 'set_art_category'
  payload: string | null | OpenAIWizartChatType
}

export type OpenAIWizartChatType = {
  from: 'user' | 'wizart'
  message: string
}

export interface OpenAIContextProvider extends OpenAIContextStateProvider {
  setArtCategory: (payload: string) => void
  setArtStyle: (payload: string) => void
  setArtInspiration: (payload: string) => void
  updateChat: (payload: OpenAIWizartChatType) => void
  initiateChat: () => Promise<{ initiated: boolean } | undefined>
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  generateChatCompletion: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>
}
