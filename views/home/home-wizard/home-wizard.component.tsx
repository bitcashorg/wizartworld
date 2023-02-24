import { Wizard } from '~/components/wizard'
import { homeWizardSteps } from '~/views/home/home-wizard-steps'

export function HomeWizard() {
  return (
    <div className="fixed flex border-t border-slate-800 items-start justify-center left-0 top-[70px] z-50 w-full h-full bg-slate-900">
      <div className="w-[450px] h-full max-h-[calc(740px-5rem)]">
        <Wizard steps={homeWizardSteps} />
      </div>
    </div>
  )
}
