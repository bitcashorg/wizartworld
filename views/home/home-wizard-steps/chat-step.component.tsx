import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'
import { WizardStepProps } from '~/components/wizard'
import { Replicate } from '~/components/replicate'

export function ChatStep({ next, prev }: WizardStepProps) {
  return (
    <div className="flex-1">
      <HomeWizardStepNav label="Chat" prev={prev} />
      <Replicate />
      <button className="text-color-black text-bold" onClick={next}>
        next
      </button>
    </div>
  )
}
