import { Wizard } from '~/components/wizard'
import { homeWizardSteps } from '~/views/home/home-wizard-steps'

export function HomeWizard() {
  return (
    <div className="flex">
      <Wizard steps={homeWizardSteps} />
    </div>
  )
}
