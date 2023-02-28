import { Wizard } from '~/components/wizard'
import { homeWizardSteps } from '~/views/home/home-wizard-steps'

export function HomeWizard() {
  // ! TODO: Add Dark-light mode reference here
  return (
    <div className="fixed flex border-t border-slate-200 dark:border-slate-800 items-start justify-center left-0 top-[72px] z-50 w-full h-full bg-slate-100 dark:bg-slate-900">
      <div className="w-[450px] h-[calc(92vh-5rem-2.5rem)] max-h-[calc(92vh-5rem-2.5rem)]">
        <Wizard steps={homeWizardSteps} />
      </div>
    </div>
  )
}
