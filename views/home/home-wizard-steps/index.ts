import { WizardStep } from '~/components/wizard'
import { CategoryStep } from './category-step.component'
import { InspirationStep } from './inspiration-step.component'
import { StyleStep } from './style-step.component'

export * from './inspiration-step.component'

export const homeWizardSteps: WizardStep[] = [
  {
    name: 'category',
    component: CategoryStep,
  },
  {
    name: 'style',
    component: StyleStep,
  },
  {
    name: 'inspiration',
    component: InspirationStep,
  },
]
