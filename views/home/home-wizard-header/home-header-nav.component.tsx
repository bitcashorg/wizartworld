import { HomeWizardStepHeaderProps } from './home-header.type'

export function HomeWizardStepNav({ prev, label }: HomeWizardStepHeaderProps) {
  return (
    <div>
      <button onClick={prev}>prev</button>
      <span>{label}</span>
    </div>
  )
}
