import React from 'react'
import { Configuration, OpenAIApi } from "openai";
import { clientEnv } from '../config/client/client-env.config';
import { OpenAIContextActionProvider, OpenAIContextProvider, OpenAIContextStateProvider } from '~/types';
import { promptCommand } from '~/lib/openai';

const configuration = new Configuration({
  apiKey: clientEnv.services.openai,
});
const openai = new OpenAIApi(configuration);

const defaultOpenAIState: OpenAIContextStateProvider = {
  history: promptCommand(),
  prompt: '',
  error: null,
}

export const OpenAIContext = React.createContext(defaultOpenAIState)

function OpenAIProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [{ history, prompt, error }, dispatch] = React.useReducer<React.Reducer<OpenAIContextStateProvider, OpenAIContextActionProvider>>(openAIReducer, defaultOpenAIState)

  const onChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'change_input',
      payload: e.target.value,
    })
  }

  const generateChatCompletion = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: history + prompt,
      temperature: 0.75,
      max_tokens: 1037,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 0,
      stop: ["USER:"],
      user: 'USER:'
    });

    console.log('response', response)
  }

  const providerValue: OpenAIContextProvider = {
    history,
    prompt,
    error,
    onChangeInput,
    generateChatCompletion,
  }

  return <OpenAIContext.Provider value={providerValue}>{children}</OpenAIContext.Provider>
}

function openAIReducer(state: OpenAIContextStateProvider, action: OpenAIContextActionProvider): OpenAIContextStateProvider {
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
