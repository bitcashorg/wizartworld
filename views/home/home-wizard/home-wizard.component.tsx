import { Wizard } from '~/components/wizard'
import { homeWizardSteps } from '~/views/home/home-wizard-steps'

export function HomeWizard() {
  return (
    <div className="h-[calc(740px-5rem)]">
      <Wizard steps={homeWizardSteps} />
    </div>
  )
}
