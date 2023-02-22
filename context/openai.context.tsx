import React from 'react'
import { Configuration, OpenAIApi } from "openai";
import { clientEnv } from '../config/client/client-env.config';
import { OpenAIContextActionProvider, OpenAIContextProvider, OpenAIContextStateProvider } from '~/types';
import { promptCommand } from '~/lib/openai';
import { openaiService } from '~/services/ai';

const configuration = new Configuration({
  apiKey: clientEnv.services.openai,
});
const openai = new OpenAIApi(configuration); 

const defaultOpenAIState: OpenAIContextProvider = {
  history: promptCommand(),
  prompt: '',
  error: null,
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
  generateChatCompletion: async (e: React.FormEvent<HTMLFormElement>) => { },
  initiateChat: async () => {},
}

export const OpenAIContext = React.createContext(defaultOpenAIState)

function OpenAIProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [{ history, prompt, error }, dispatch] = React.useReducer<React.Reducer<OpenAIContextProvider, OpenAIContextActionProvider>>(openAIReducer, defaultOpenAIState)

  const onChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'change_input',
      payload: e.target.value,
    })
  }

  const initiateChat = async () => {
    const response = await openaiService.getTextCompletion({
      prompt: promptCommand(),
    })

    console.log('response from initiation of chatbot => ', response)
  }

  const generateChatCompletion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await openaiService.getTextCompletion({
      prompt: history + prompt,
    })

    console.log('response from generation of chat completion => ', response)
  }

  const providerValue: OpenAIContextProvider = {
    history,
    prompt,
    error,
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
        error: action.payload,
      }
    case 'update_prompt':
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
