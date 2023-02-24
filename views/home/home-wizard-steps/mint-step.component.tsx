import { useForm } from 'react-hook-form'

import { Form } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { NFTPreview } from '~/components/nft-preview'
import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header'

export function MintStep({ next }: WizardStepProps) {
  const { handleSubmit, register } = useForm<MintFormProps>()

  const onSubmit = (data: MintFormProps) => {
    console.log({ data })
    next() // WIP: pending mint
  }
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="PREVIEW" step={5} />
      <div className="flex content-center py-6">
        <Form>
          <div className="flex flex-col gap-6 px-7">
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
      <div className="flex content-center px-4">
        <NFTPreview />
      </div>
      <div className="px-4 py-8">
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="primary"
          size="full"
          label="Create & Mint NFT"
        />
      </div>
    </div>
  )
}

type MintFormProps = {
  nftName: string
  nftCollection: string
}
