import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header'

export function MintStep({ next, prev }: WizardStepProps) {
  return (
    <div className="bg-blue-500">
      <HomeWizardStepNav label="Mint" prev={prev} />
      I'm the Mint step <button onClick={next}>next</button>
    </div>
  )
}
