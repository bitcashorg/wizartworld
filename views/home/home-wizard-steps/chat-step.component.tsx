import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'
import { WizardStepProps } from '~/components/wizard'
import { WizartChat } from '~/components/wizart'

export function ChatStep({ next, prev }: WizardStepProps) {
  return (
    <div className="flex-1">
      <HomeWizardStepNav label="Chat" prev={prev} step={4} />
      <WizartChat next={next} />
    </div>
  )
}
