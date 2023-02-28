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
  const { handleSubmit, register } = useForm<MintFormProps>()
  const { prediction } = useReplicateContext()
  const [onSubmitState, onSubmit] = useAsyncFn(async (data: MintFormProps) => {
    const image = prediction && prediction.output[prediction.output.length - 1]
    if (!image) return
    const blob = await fetch(image).then((res) => res.blob())
    console.log({ data, image, prediction, blob })
    const response = fetchJson('/api/niftory/create-file-url', {
      method: 'POST',
      body: JSON.stringify({
        name: 'test test',
        description: prediction?.input.prompt,
        options: {
          contentType: blob.type,
          posterContentType: blob.type,
        },
      }),
    })

    console.log('response', { response })

    //     const { uploadNFTContent } = await backendClient<
    //       UploadNftContentMutation,
    //       UploadNftContentMutationVariables
    //     >("fileUpload", {
    //       name: file.name,
    //       description: "Created using Mintme by Niftory",
    //
    //     })
    //     const content = uploadNFTContent?.files[0]
    //     content.contentType = file.type.split("/")[0]
    //     const poster = uploadNFTContent?.poster

    //     await axios.put(content?.url, file, {
    //       onUploadProgress({ loaded, total }) {
    //         setContentProgress(Math.round((loaded * 100) / total))
    //       },
    //       headers: {
    //         "Content-Type": file.type,
    //       },
    //     })

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
                  id="nft_name"
                  placeholder="Name your piece..."
                  formProps={{
                    ...register('nftName', { required: true }),
                  }}
                />
                <TextInput
                  id="nft_collection"
                  placeholder="Collection..."
                  formProps={{
                    ...register('nftCollection', { required: true }),
                  }}
                />
              </div>
              <Button type="submit" label="submit" />
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
  nftName: string
  nftCollection: string
}
