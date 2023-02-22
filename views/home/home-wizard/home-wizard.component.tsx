import { Wizard } from '~/components/wizard'
import { homeWizardSteps } from '~/views/home/home-wizard-steps'

export function HomeWizard() {
  return (
    <div className="bg-slate-100">
      <Wizard steps={homeWizardSteps} />
    </div>
  )
}
