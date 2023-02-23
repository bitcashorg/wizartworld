import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'
import { WizardStepProps } from '~/components/wizard'

export function ChatStep({ next, prev }: WizardStepProps) {
  return (
    <div className="flex-1 text-purple-900 bg-white">
      <HomeWizardStepNav label="Chat" prev={prev} />
      I'm the Chat step
      <button className="text-color-black text-bold" onClick={next}>
        next
      </button>
    </div>
  )
}
