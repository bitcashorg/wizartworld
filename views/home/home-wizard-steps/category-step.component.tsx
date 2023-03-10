import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { WizardStepProps } from '~/components/wizard'
import { useOpenAI } from '~/context/openai.context'
import { HomeWizardStepNav } from '~/views/home/home-wizard-header/home-header-nav.component'

import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export const categories = [
  { label: 'Cinema', value: 'cinema' },
  { label: 'Video Games', value: 'video_games' },
  { label: 'Interior Design', value: 'interior_design' },
  { label: 'Graphic Design', value: 'graphic_design' },
  { label: 'Illustration', value: 'illustration' },
  { label: 'Fashion Design', value: 'fashion_design' },
  { label: 'Food', value: 'food' },
]

export function CategoryStep({ next, prev }: WizardStepProps) {
  const { register, watch } = useForm()
  const { setArtCategory } = useOpenAI()
  const categoryField = register('category', {
    required: true,
  })
  const categoryValue = watch('category')

  const updateArtCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    categoryField.onChange(e)
    setArtCategory(e.target.value)
    next()
  }

  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="Category" prev={prev} step={1} />

      <HomeWizardPageTransition>
        <div className="wizard-step__content-wrapper flex-1">
          {categories.map((category, index) => (
            <div
              key={category.value}
              className={clsx(
                'wizard-step-card',
                category.value === categoryValue ? 'wizard-step-card--selected' : '',
                index === categories.length - 1 ? 'wizard-step-card--full' : '',
              )}
            >
              <label htmlFor={category.value}>
                <input
                  type="radio"
                  {...categoryField}
                  id={category.value}
                  value={category.value}
                  onChange={updateArtCategory}
                />
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </HomeWizardPageTransition>
    </div>
  )
}
