import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '../home-wizard-header'
import React from 'react'
import { useForm } from 'react-hook-form'
import { HomeWizardPageTransition } from '~/views/home/home-wizard/home-wizard-page-transition.component'
import { ImageAsset } from '~/components/image.component';
import clsx from 'clsx'
import { useOpenAI } from '~/context/openai.context'

export const inspirations = [
  { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
  { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'interior_design' },
  { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'graphic_design' },
  { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'cinema' },
  { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'fashion_design' },
  { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'video_games' },
  { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'illustration' },
]

export function InspirationStep({ prev, next }: WizardStepProps) {
  const { register, watch } = useForm()
  const { setArtInspiration } = useOpenAI()
  const inspirationField = register('inspiration', {
    required: true,
  }) 
  const inspirationValue = watch('inspiration')

  const updateArtInspiration = (e: React.ChangeEvent<HTMLInputElement>) => { 
    inspirationField.onChange(e)
    setArtInspiration(e.target.value)

    // * Enhance UX. The movement is very quick, so we add a timeout to make it feel more natural
    const timeout = setTimeout(() => {
      next()

      clearTimeout(timeout)
    }, 360)
  }

  return (
    <div className="wizard-step-wrapper">
      <HomeWizardStepNav label="Inspiration" prev={prev} step={3} />
      <HomeWizardPageTransition>
        <div className="wizard-step__content-wrapper">
          {inspirations.map((inspiration, index) => (
              <div
                key={inspiration.value}
                className={clsx(
                  'wizard-step-card wizard-step-card--inspiration',
                  inspiration.value === inspirationValue ? 'wizard-step-card--selected' : '',
                )}
              >
                <label htmlFor={inspiration.value}>
                  <input
                    type="radio"
                    {...inspirationField}
                    id={inspiration.value}
                    value={inspiration.value}
                    onChange={updateArtInspiration}  
                  />
                  <ImageAsset src={inspiration.label} alt="a duck" />
                </label>
              </div>
            ))}
        </div>
      </HomeWizardPageTransition>
    </div>
  )
}
