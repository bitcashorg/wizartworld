import { Wizard } from '~/components/wizard'
import { homeWizardSteps } from '~/views/home/home-wizard-steps'

export function HomeWizard() {
  return <Wizard steps={homeWizardSteps} />
}
