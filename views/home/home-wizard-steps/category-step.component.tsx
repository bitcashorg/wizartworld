import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'

export function CategoryStep({ next, prev }: WizardStepProps) {
  return (
    <div className="flex-1 text-red-900 bg-white">
      <HomeWizardStepNav label="Category" prev={prev} />
      I'm the category step{' '}
      <button className="text-color-black text-bold" onClick={next}>
        next
      </button>
    </div>
  )
}
