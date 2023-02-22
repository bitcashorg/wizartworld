import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '../home-wizard-header'

export function InspirationStep({ prev, next }: WizardStepProps) {
  return (
    <div className="bg-red-500">
      <HomeWizardStepNav label="Inspiration" prev={prev} />
      I'm the Inspiration step <button onClick={next}>next</button>
    </div>
  )
}
