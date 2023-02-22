import React from 'react'
import { OpenAIContextActionProvider, OpenAIContextProvider, OpenAIContextStateProvider, OpenAIWizartChatType } from '~/types';
import { promptCommand } from '~/lib/openai';
import { openaiService } from '~/services/ai';

const defaultOpenAIState: OpenAIContextProvider = {
  history: promptCommand(),
  wizartChat: [],
  prompt: '',
  error: null,
  updateChat: (payload: OpenAIWizartChatType) => {},
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
  generateChatCompletion: async (e: React.FormEvent<HTMLFormElement>) => { },
  initiateChat: async () => {},
}

export const OpenAIContext = React.createContext(defaultOpenAIState)

let initiated = false

function OpenAIProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [{ history, wizartChat, prompt, error }, dispatch] = React.useReducer<React.Reducer<OpenAIContextProvider, OpenAIContextActionProvider>>(openAIReducer, defaultOpenAIState)

  const onChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'change_input',
      payload: e.target.value,
    })
  }

  const initiateChat = async () => {
    if (initiated) return

    initiated = true

    const { result } = await openaiService.getTextCompletion({
      prompt: promptCommand(),
    })

    dispatch({
      type: 'update_chat',
      payload: {
        from: 'wizart',
        message: result
      }
    })
    dispatch({
      type: 'update_history',
      payload: result,
    })
  }

  const updateChat = (payload: OpenAIWizartChatType) => dispatch({
    type: 'update_chat',
    payload
  })

  const generateChatCompletion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { result } = await openaiService.getTextCompletion({
      prompt: history + '\n' + prompt,
    })

    dispatch({
      type: 'update_chat',
      payload: {
        from: 'wizart',
        message: result
      }
    })
    dispatch({
      type: 'update_history',
      payload: prompt,
    })
  }

  const providerValue: OpenAIContextProvider = {
    history,
    wizartChat,
    prompt,
    error,
    updateChat,
    initiateChat,
    onChangeInput,
    generateChatCompletion,
  }

  return <OpenAIContext.Provider value={providerValue}>{children}</OpenAIContext.Provider>
}

function openAIReducer(state: OpenAIContextProvider, action: OpenAIContextActionProvider): OpenAIContextProvider {
  switch (action.type) {
    case 'change_input':
      return {
        ...state,
        prompt: `USER:${action.payload}` as string,
      }
    case 'set_error':
      return {
        ...state,
        error: action.payload as string | null,
      }
    case 'update_chat':
      return {
        ...state,
        wizartChat: [...state.wizartChat, action.payload as OpenAIWizartChatType],
      }
    case 'update_history':
      return {
        ...state,
        history: promptCommand(action.payload as string)
      }
    case 'set_history':
      return {
        ...state,
        history: state.history + action.payload,
      }
    default:
      throw new Error('Invalid action type')
  }
}

function useOpenAI() {
  const replicate = React.useContext(OpenAIContext)
  if (!replicate) {
    throw new Error('useOpenAI must be used within OpenAIProvider')
  }
  return replicate
}

export { OpenAIProvider, useOpenAI }
