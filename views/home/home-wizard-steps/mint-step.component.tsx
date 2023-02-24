import { useForm } from 'react-hook-form'

import { Form } from '~/components'
import { Button } from '~/components/button'
import { TextInput } from '~/components/form/text-input'
import { NFTPreview } from '~/components/nft-preview'
import { WizardStepProps } from '~/components/wizard'
import { useOpenAI } from '~/context/openai.context'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header'

export function MintStep({ next, prev }: WizardStepProps) {
  const { handleSubmit, register } = useForm()

  // TODO: fix any
  const onSubmit = (data: any) => {
    console.log({ data })
    // next() // WIP
  }
  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="PREVIEW" prev={prev} step={5} />
      <div className="flex content-center py-6">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 px-7">
            <TextInput
              id="nft_name"
              placeholder="Name your piece..."
              formProps={{
                ...register('nft_name', { required: true }),
              }}
            />
            <TextInput
              id="nft_collection"
              placeholder="Collection..."
              formProps={{
                ...register('nft_collection', { required: true }),
              }}
            />
          </div>
        </Form>
      </div>
      <div className="flex content-center px-4">
        <NFTPreview />
      </div>
      <div className="py-8 px-4">
        <Button onClick={next} variant="primary" size="full" label="Create & Mint NFT"></Button>
      </div>
    </div>
  )
}
