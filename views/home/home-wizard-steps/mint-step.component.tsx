import { NFTPreview } from '~/components/nft-preview'
import { WizardStepProps } from '~/components/wizard'
import { useOpenAI } from '~/context/openai.context'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header'

export function MintStep({ next, prev }: WizardStepProps) {
  return (
    <div className="bg-blue-500">
      <HomeWizardStepNav label="Mint" prev={prev} step={5} />
      <NFTPreview />
      I'm the Mint step <button onClick={next}>next</button>
      <button onClick={next}>next</button>
    </div>
  )
}
