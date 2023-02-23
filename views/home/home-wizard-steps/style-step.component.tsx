import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '../home-wizard-header'
import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'
import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useOpenAI } from '~/context/openai.context'

export const artStyles = {
  video_games: [
    { label: 'Sprite sheet', value: 'sprite_sheet' },
    { label: 'Character', value: 'character' },
    { label: 'Pixel Art', value: 'pixel_art' },
    { label: 'Dark Souls', value: 'dark_souls_alike' },
  ],
  cinema: [
    { label: 'Horror', value: 'horror' },
    { label: 'Sci-Fi', value: 'sci-fi' },
    { label: '60s', value: '60s' },
    { label: '80s', value: '80s' },
  ],
  graphic_design: [
    { label: 'Digital Print', value: 'digital_print' },
    { label: '2D Illustration', value: '2d_illustration' },
    { label: 'Flat Design', value: 'flat_design' },
    { label: 'Vectorized', value: 'vectorized' },
  ],
  illustration: [
    { label: 'Retro', value: 'reetro_style' },
    { label: 'Digital Painting', value: '2d_illustration' },
    { label: 'Oil Painting', value: 'flat_design' },
    { label: 'Claude Monet', value: 'claude_monet' },
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
