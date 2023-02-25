import { useForm } from 'react-hook-form'

import { Form } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { NFTPreview } from '~/components/nft-preview'
import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header'

import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export function MintStep({ next }: WizardStepProps) {
  const { handleSubmit, register } = useForm<MintFormProps>()

  const onSubmit = (data: MintFormProps) => {
    console.log({ data })
    next() // WIP: pending mint
  }
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="PREVIEW" step={5} />
      <HomeWizardPageTransition>
        <div className="wizard-step__content-wrapper flex-1 px-6">
          <div className="flex content-center py-6 w-full px-8">
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
          <div className="py-8 w-full">
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
