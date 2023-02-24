import Image from 'next/image'

import { BackIcon } from '~/components/icons'

import { HomeWizardStepHeaderProps } from './home-header.type'

export function HomeWizardStepNav({ prev, label, step }: HomeWizardStepHeaderProps) {
  return (
    <div className="wizard-step-header">
      {/* TODO: maybe we can add a disabled style */}
      <button
        className="wizard-step-header__back-btn"
        onClick={prev}
        disabled={!Boolean(prev)}
        aria-label="return to previous step"
      >
        <BackIcon width={40} height={40} />
      </button>

      <span className="wizard-step-header__label">{label}</span>
      <span className="wizard-step-header__step-counter">{step} | 5</span>
    </div>
  )
}
