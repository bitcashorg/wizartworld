import React from 'react'
import { OpenAIContextActionProvider, OpenAIContextProvider, OpenAIContextStateProvider, OpenAIWizartChatType } from '~/types';
import { promptCommand } from '~/lib/openai';
import { openaiService } from '~/services/ai';
import { logger } from '~/lib/logger';

const defaultOpenAIState: OpenAIContextProvider = {
  history: promptCommand(),
  wizartChat: [],
  prompt: '',
  artStyle: '',
  artCategory: '',
  artInspiration: '',
  error: null,
  setArtCategory: (payload: string) => {},
  setArtStyle: (payload: string) => {},
  setArtInspiration: (payload: string) => {},
  updateChat: (payload: OpenAIWizartChatType) => {},
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
  generateChatCompletion: async (e: React.FormEvent<HTMLFormElement>) => { },
  initiateChat: async () => {},
}

export const OpenAIContext = React.createContext(defaultOpenAIState)

let initiated = false

function OpenAIProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [{ history, wizartChat, prompt, error, artCategory, artStyle, artInspiration, }, dispatch] = React.useReducer<React.Reducer<OpenAIContextProvider, OpenAIContextActionProvider>>(openAIReducer, defaultOpenAIState)

  const onChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'change_input',
      payload: e.target.value,
    })
  }

  const initiateChat = async () => {
    if (initiated) return

    initiated = true

    try {
      const { result } = await openaiService.getTextCompletion({
        prompt: promptCommand(artInspiration),
      })

      dispatch({
        type: 'update_chat',
        payload: {
          from: 'wizart',
          message: result
        }
      })
      dispatch({
        type: 'set_history',
        payload: result,
      })
    } catch (error) {
      logger.error('[ERROR] initiateChat ===>', error)
      throw new Error((error as Error).message)
    }
  }

  const updateChat = (payload: OpenAIWizartChatType) => dispatch({
    type: 'update_chat',
    payload
  })

  const generateChatCompletion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { result } = await openaiService.getTextCompletion({
        prompt: history + '\n\n' + prompt,
      })

      updateChat({
        from: 'wizart',
        message: result
      })
      dispatch({
        type: 'set_history',
        payload: result + '\n\n' + prompt,
      })
    } catch (error) {
      logger.error('[ERROR] generateChatCompletion ===>', error)
      throw new Error((error as Error).message)
    } finally {
      dispatch({
        type: 'change_input',
        payload: '',
      })
    }
  }

  const setArtCategory = (payload: string) => dispatch({
    type: 'set_art_category',
    payload
  })

  const setArtStyle = (payload: string) => dispatch({
    type: 'set_art_style',
    payload
  })

  const setArtInspiration = (payload: string) => dispatch({
    type: 'set_art_inspiration',
    payload
  })

  const providerValue: OpenAIContextProvider = {
    history,
    wizartChat,
    prompt,
    error,
    artCategory,
    artStyle,
    artInspiration,
    updateChat,
    initiateChat,
    onChangeInput,
    setArtStyle,
    setArtCategory,
    setArtInspiration,
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
    case 'set_art_category':
      return {
        ...state,
        artCategory: action.payload as string,
      }
    case 'set_art_style':
      return {
        ...state,
        artStyle: action.payload as string,
      }
    case 'set_art_inspiration':
      return {
        ...state,
        artInspiration: action.payload as string,
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
