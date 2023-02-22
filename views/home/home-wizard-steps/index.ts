import { WizardStep } from '~/components/wizard'
import { IntialStep } from './initial-step.component'
import { LastStep } from './last-step.component'
import { MIdStep } from './mid-step.component'

export * from './last-step.component'

export const homeWizardSteps: WizardStep[] = [
  {
    name: 'initial',
    component: IntialStep,
  },
  {
    name: 'initial',
    component: MIdStep,
  },
  {
    name: 'initial',
    component: LastStep,
  },
]
