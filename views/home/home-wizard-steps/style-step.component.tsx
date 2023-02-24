import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'

import { ImageAsset } from '~/components/image'
import { WizardStepProps } from '~/components/wizard'
import { useOpenAI } from '~/context/openai.context'

import { HomeWizardStepNav } from '../home-wizard-header'
import { HomeWizardPageTransition } from '../home-wizard/home-wizard-page-transition.component'

export const artStyles = {
  video_games: [
    {
      label: 'Sprite sheet',
      value: 'Sprite sheet with game visuals, ',
      preview: 'https://bestaiprompts.art/img/game20.jpeg',
    },
    {
      label: 'Character',
      value: 'fantasy point and click adventure game character, ',
      preview: 'https://bestaiprompts.art/img/game15.jpeg',
    },
    {
      label: 'Pixel Art',
      value: '16 bit pixel art, ',
      preview: 'https://bestaiprompts.art/img/game31.jpeg',
    },
    {
      label: 'Dark Souls',
      value: 'dark souls concept art, ',
      preview: 'https://bestaiprompts.art/img/illustration57.jpeg',
    },
  ],
  cinema: [
    {
      label: 'Horror',
      value: 'horror movie, ',
      preview: 'https://bestaiprompts.art/img/cine39.jpeg',
    },
    {
      label: 'Sci-Fi',
      value: 'sci-fi films film from the 60s, ',
      preview: 'https://bestaiprompts.art/img/cine68.jpeg',
    },
    {
      label: '80s',
      value: 'movie still photography from the 80s, ',
      preview: 'https://bestaiprompts.art/img/cine125.jpeg',
    },
    {
      label: '60s',
      value: 'movie still photography from the 60s, ',
      preview: 'https://bestaiprompts.art/img/cine92.jpeg',
    },
  ],
  graphic_design: [
    {
      label: 'Digital Print',
      value: 'digital print, ',
      preview: 'https://bestaiprompts.art/img/graphic40.jpeg',
    },
    {
      label: '2D Illustration',
      value: '2D illustration, ',
      preview: 'https://bestaiprompts.art/img/graphic36.jpeg',
    },
    {
      label: 'Flat Design',
      value: 'flat design, ',
      preview: 'https://bestaiprompts.art/img/graphic51.jpeg',
    },
    {
      label: 'Vectorized',
      value: 'vectorized sticker art design, ',
      preview: 'https://bestaiprompts.art/img/graphic13.jpeg',
    },
  ],
  illustration: [
    {
      label: 'Retro',
      value: 'retro style, ',
      preview: 'https://bestaiprompts.art/img/illustration2.jpeg',
    },
    {
      label: 'Digital Painting',
      value: 'flat illustration, ',
      preview: 'https://bestaiprompts.art/img/illustration86.jpeg',
    },
    {
      label: 'Oil Painting',
      value: 'oil painting texture,',
      preview: 'https://bestaiprompts.art/img/game26.jpeg',
    },
    {
      label: 'Claude Monet',
      value: 'claude monet style, ',
      preview:
        'https://replicate.delivery/pbxt/w4YvQwJUkeUqTyH5yYf9I5fvRRY7VmQ94GxeeefRUir9IwNQIA/out-0.png',
    },
  ],
  // ! Starting from here, values and labels repeats... TODO: Add more content
  interior_design: [
    { label: 'Retro', value: 'retro style, ' },
    { label: 'Digital Painting', value: '2d illustration, ', preview: '' },
    { label: 'Oil Painting', value: 'oil painting texture,', preview: '' },
    { label: 'Claude Monet', value: 'claude monet,', preview: '' },
  ],
  fashion_design: [
    { label: 'Retro', value: 'retro style, ', preview: '' },
    { label: 'Digital Painting', value: '2d illustration,', preview: '' },
    { label: 'Oil Painting', value: 'oil painting texture,', preview: '' },
    { label: 'Claude Monet', value: 'claude monet,', preview: '' },
  ],
  food: [
    { label: 'Retro', value: 'retro style, ', preview: '' },
    { label: 'Digital Painting', value: '2d illustration,', preview: '' },
    { label: 'Oil Painting', value: 'oil painting texture,', preview: '' },
    { label: 'Claude Monet', value: 'claude monet,', preview: '' },
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
    next()
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
              {style.preview ? (
                <div className="wizart-step-card__style-preview">
                  <ImageAsset src={style.preview} alt={style.label} preview />
                </div>
              ) : null}
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
