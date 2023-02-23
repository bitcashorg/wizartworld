import Image from 'next/image'
import { HomeWizardStepHeaderProps } from './home-header.type'
import { BackIcon } from '~/components/icons'

export function HomeWizardStepNav({ prev, label, step }: HomeWizardStepHeaderProps) {
  return (
    <div className="wizard-step-header">
      <button className="wizard-step-header__back-btn" onClick={prev} aria-label="return to previous step">
        <BackIcon width={40} height={40}  />
      </button>
      <span className="wizard-step-header__label">{label}</span>
      <span className="wizard-step-header__step-counter">{step} | 5</span>
    </div>
  )
}
