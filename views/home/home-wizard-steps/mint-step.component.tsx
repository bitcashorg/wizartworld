import axios from 'axios'
import JSConfetti from 'js-confetti'
import { useForm } from 'react-hook-form'
import { useAsyncFn, useSetState } from 'react-use'

import { Form } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { NFTPreview } from '~/components/nft-preview'
import { WizardStepProps } from '~/components/wizard'
import { useReplicateContext } from '~/context/replicate.context'
import { fetchJson } from '~/lib/fetch/fetch.lib'

import { HomeWizardPageTransition } from '../home-wizard'
import { HomeWizardStepNav } from '../home-wizard-header'

export function MintStep({ next }: WizardStepProps) {
  const { prediction } = useReplicateContext()
  const { handleSubmit, register } = useForm<MintFormProps>({
    defaultValues: { description: prediction?.input.prompt || '' },
  })
  const [state, setState] = useSetState({ isMinted: false })

  const [submitState, onSubmit] = useAsyncFn(async (data: MintFormProps) => {
    const image = prediction && prediction.output[prediction.output.length - 1]
    if (!image) return

    const blob = await fetch(image).then((res) => res.blob())

    const file = await fetchJson<any>('/api/niftory/create-file-url', {
      method: 'POST',
      body: JSON.stringify({
        name: data.title,
        description: data.description,
        options: {
          contentType: blob.type,
          uploadToIPFS: true,
        },
      }),
    })

    await axios.put(file.data.url, blob, {
      onUploadProgress({ loaded, total }) {
        console.log({ loaded, total })
        // setContentProgress(Math.round((loaded * 100) / total))
      },
      headers: {
        'Content-Type': blob.type,
      },
    })

    const res = await fetchJson<any>('/api/niftory/create-nft-model', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          /** The user-friendly title for this model. This will be added to the blockchain metadata when an NFT is minted. */
          title: data.title,
          /** The user-friendly subtitle for this model. This will be added to the blockchain metadata when an NFT is minted. */
          subtitle: data.title,
          /** The user-friendly details about this model. This will be added to the blockchain metadata when an NFT is minted. */
          description: data.description,
          /** The total supply of NFTs that can be available for this model. This can be updated until the NFTModel is minted. */
          quantity: 1,

          /** The file content for this model. Either 'content' or 'contentId' must be specified. */
          content: {
            /** The ID of the [NFTFile]({{Types.NFTFile}}) content. This can be created using [createFileUploadUrl]({{Mutations.createFileUploadUrl}}). */
            fileId: file.data.id,
            /** The ID of the poster [File]({{Types.File}}). This can be created using [createFileUploadUrl]({{Mutations.createFileUploadUrl}}). */
            posterId: file.data.id,
          },

          /** Metadata that will be added to the blockchain for any NFTs minted from this model. */
          metadata: {},
          /** A mapping of attributes for this resource. These will be stored in the Niftory API but will not be added to the blockchain. */
          attributes: {},
          /** String labels to tag this [NFTModel]({{Types.NFTModel}}) with. These will be stored in the Niftory API but will not be added to the blockchain. */
          tags: [''],
        },
      }),
    })

    await fetchJson<any>('/api/niftory/mint-nft-model', {
      method: 'POST',
      body: JSON.stringify({
        id: res.data.id,
      }),
    })

    setState({ isMinted: true })

    const jsConfetti = new JSConfetti()

    jsConfetti
      .addConfetti({
        // emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      })
      .then(() => jsConfetti.clearCanvas())

    // next()
  })

  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="PREVIEW" step={5} />
      <HomeWizardPageTransition>
        <div className="flex-1 px-6 wizard-step__content-wrapper">
          <div className="flex content-center w-full px-8 py-6">
            {!state.isMinted ? (
              <Form>
                <div className="flex flex-col gap-6">
                  <TextInput
                    id="title"
                    placeholder="Name your piece..."
                    formProps={{
                      ...register('title', { required: true }),
                    }}
                  />
                  <TextInput
                    id="description"
                    placeholder="Collection..."
                    formProps={{
                      ...register('description', { required: true }),
                    }}
                  />
                </div>
              </Form>
            ) : (
              <h2>NFT successfully minted! 🥳</h2>
            )}
          </div>
          <div className="flex content-center w-full">
            <NFTPreview />
          </div>
          <div className="w-full py-8">
            {state.isMinted ? (
              <Button label="Next" onClick={next} variant="primary" size="lg" />
            ) : (
              <Button
                onClick={handleSubmit(onSubmit)}
                disabled={submitState.loading}
                variant="primary"
                size="lg"
                label={submitState.loading ? 'Minting your NFT ...' : 'Create & Mint NFT'}
              />
            )}
          </div>
        </div>
      </HomeWizardPageTransition>
    </div>
  )
}

type MintFormProps = {
  title: string
  description: string
}
