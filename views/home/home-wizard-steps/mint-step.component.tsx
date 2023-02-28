import axios from 'axios'
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

  const [onSubmitState, onSubmit] = useAsyncFn(async (data: MintFormProps) => {
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

    const response = await axios.put(file.data.url, blob, {
      onUploadProgress({ loaded, total }) {
        console.log({ loaded, total })
        // setContentProgress(Math.round((loaded * 100) / total))
      },
      headers: {
        'Content-Type': blob.type,
      },
    })
    console.log('response', response)

    //     let posterFile = file
    //     if (content.contentType === "video") {
    //       posterFile = captureVideoFrame("upload-video", "png").blob
    //     }

    //     await axios.put(poster?.url, posterFile, {
    //       onUploadProgress({ loaded, total }) {
    //         setPosterProgress(Math.round((loaded * 100) / total))
    //       },
    //       headers: {
    //         "Content-Type": file.type,
    //       },
    //     })

    //     await onUpload(uploadNFTContent)
    //   } catch {
    //     setFilePreview(null)
    //     toast.error("Uh Oh, there was an error uploading your media")
    //   }
    //   setPosterProgress(0)
    //   setContentProgress(0)
    //   setLoading(false)
    next()
  })
  const [state, setState] = useSetState({})

  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="PREVIEW" step={5} />
      <HomeWizardPageTransition>
        <div className="flex-1 px-6 wizard-step__content-wrapper">
          <div className="flex content-center w-full px-8 py-6">
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
          </div>
          <div className="flex content-center w-full">
            <NFTPreview />
          </div>
          <div className="w-full py-8">
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="primary"
              size="lg"
              label="Create & Mint NFT"
            />
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
