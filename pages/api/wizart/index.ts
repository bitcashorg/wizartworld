import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from 'next';
import { promptCommand } from "~/lib/openai";
import { FetchError } from "~/lib/fetch";
import { clientEnv } from "~/config/client";

const configuration = new Configuration({
  apiKey: clientEnv.services.openai,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: JSON.parse(req.body).prompt || promptCommand(),
      temperature: 0.75,
      max_tokens: 1037,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 0,
      stop: ["USER:"],
      user: 'USER:'
    });
    console.log('response completion => ', completion)
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if ((error as FetchError).response) {
      console.error((error as FetchError).response.status, (error as FetchError).response);
      res.status((error as FetchError).response.status).json((error as FetchError).response);
    } else {
      console.error(`Error with OpenAI API request: ${(error as FetchError).message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
