import { useForm } from 'react-hook-form'

import { Form } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { NFTPreview } from '~/components/nft-preview'
import { WizardStepProps } from '~/components/wizard'
import { useReplicateContext } from '~/context/replicate.context'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header'

import { HomeWizardPageTransition } from '../home-wizard'

export function MintStep({ next }: WizardStepProps) {
  const { handleSubmit, register } = useForm<MintFormProps>()
  const { prediction } = useReplicateContext()

  const onSubmit = (data: MintFormProps) => {
    const image = prediction && prediction.output[prediction.output.length - 1]
    console.log({ data, image, prediction })
    next()
  }
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
