import { WizardStepProps } from '~/components/wizard'
import { WizartChat } from '~/components/wizart'
import { useReplicateContext } from '~/context/replicate.context'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'

export function ChatStep({ next, prev }: WizardStepProps) {
  const { prediction } = useReplicateContext()

  return (
    <div className="flex-1">
      <HomeWizardStepNav label="Wizart" prev={!prediction ? prev : () => {}} step={4} />
      <WizartChat next={next} />
    </div>
  )
}
