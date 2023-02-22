import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header'

export function StyleStep({ next, prev }: WizardStepProps) {
  return (
    <div className="bg-blue-500">
      <HomeWizardStepNav label="Style" prev={prev} />
      I'm the Style step <button onClick={next}>next</button>
    </div>
  )
}
