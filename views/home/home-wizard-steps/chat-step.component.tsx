import { WizardStepProps } from '~/components/wizard'
import { WizartChat } from '~/components/wizart'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'

export function ChatStep({ next, prev }: WizardStepProps) {
  return (
    <div className="flex-1">
      <HomeWizardStepNav label="Wizart" prev={prev} step={4} />
      <WizartChat next={next} />
    </div>
  )
}
