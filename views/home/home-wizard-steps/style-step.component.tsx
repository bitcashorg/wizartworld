import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { WizardStepProps } from '~/components/wizard'
import { useOpenAI } from '~/context/openai.context'

import { HomeWizardStepNav } from '../home-wizard-header'
import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export const artStyles = {
  video_games: [
    { label: 'Sprite sheet', value: 'Sprite sheet with game visuals, ' },
    { label: 'Character', value: 'fantasy point and click adventure game character, ' },
    { label: 'Pixel Art', value: '16 bit pixel art, ' },
    { label: 'Dark Souls', value: 'dark souls concept art, ' },
  ],
  cinema: [
    { label: 'Horror', value: 'horror movie, ' },
    { label: 'Sci-Fi', value: 'sci-fi movie, ' },
    { label: '80s', value: 'movie still from the 80s, ' },
    { label: '60s', value: 'movie still from the 60s, ' },
  ],
  graphic_design: [
    { label: 'Digital Print', value: 'digital print, ' },
    { label: '2D Illustration', value: '2d_illustration, ' },
    { label: 'Flat Design', value: 'flat design, ' },
    { label: 'Vectorized', value: 'vectorized, ' },
  ],
  illustration: [
    { label: 'Retro', value: 'retro style, ' },
    { label: 'Digital Painting', value: '2d illustration,' },
    { label: 'Oil Painting', value: 'oil painting texture,' },
    { label: 'Claude Monet', value: 'claude monet,' },
  ],
}

export function StyleStep({ next, prev }: WizardStepProps) {
  const { register, watch } = useForm()
  const { artCategory, setArtStyle } = useOpenAI()
  const categoryStyleField = register('category-style', {
    required: true,
  })
  const categoryStyleValue = watch('category-style')

  const updateArtStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
    categoryStyleField.onChange(e)
    setArtStyle(e.target.value)

    // * Enhance UX. The movement is very quick, so we add a timeout to make it feel more natural
    const timeout = setTimeout(() => {
      next()

      clearTimeout(timeout)
    }, 360)
  }

  return (
    <div className="wizard-step-wrapper ">
      <HomeWizardStepNav label="Style" prev={prev} step={2} />

      <HomeWizardPageTransition>
        <div className="wizard-step__content-wrapper">
          {artStyles[artCategory as keyof typeof artStyles].map((style, index) => (
            <div
              key={style.value}
              className={clsx(
                'wizard-step-card wizard-step-card--style',
                style.value === categoryStyleValue ? 'wizard-step-card--selected' : '',
              )}
            >
              <label htmlFor={style.value}>
                <input
                  type="radio"
                  {...categoryStyleField}
                  id={style.value}
                  value={style.value}
                  onChange={updateArtStyle}
                />
                {style.label}
              </label>
            </div>
          ))}
        </div>
      </HomeWizardPageTransition>
    </div>
  )
}
