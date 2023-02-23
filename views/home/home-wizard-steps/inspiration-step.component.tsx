import { WizardStepProps } from '~/components/wizard'
import { HomeWizardStepNav } from '../home-wizard-header'
import React from 'react'
import { useForm } from 'react-hook-form'
import { HomeWizardPageTransition } from '~/views/home/home-wizard/home-wizard-page-transition.component'
import { ImageAsset } from '~/components/image.component';
import clsx from 'clsx'
import { useOpenAI } from '~/context/openai.context'

// * For now, we will keep it simple, only filtering by category and adding the style on the prompt
// TODO: Add more styles and filter by style and provide additional prompt for each of them... Too deep to do it now
export const inspirationStyles = {
  video_games: [
    { label: 'https://bestaiprompts.art/img/game8.jpeg', value: 'in a forest background, insanely detailed, inspiration style Zhuoxin Ye, artgem, medieval, grimdark, dark fantasy, Dark souls concept art,elden ring, concept art, trending on artstation, 8k --v 4 --q 2 --ar 3:2' },
    { label: 'https://bestaiprompts.art/img/game5.jpeg', value: 'full body, model sheet turnaround, full color, two thirds wiew, front::4 view and back view --v 4 --ar 3:2 --q 2' },
    { label: 'https://bestaiprompts.art/img/game44.jpeg', value: 'game assets, various props, 3D exploring game, Ultima Online, cinematic lighting, designed, pc game, beautiful, manga, unreal, 64k, enhanced, intricate pixel art --v 4 --q 2' },
    { label: 'https://bestaiprompts.art/img/game48.jpeg', value: 'game assets, sprite sheet, point and click adventure, medieval fantasy tavern drinking people, side view --v 4' },
  ],
  cinema: [
    { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine37.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine36.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine67.jpeg', value: 'full body visible, shot on cinestill 800t 35mm film, with leica m9 Voigtländer 35mm classic, distopian lighting, key visual, character design, looking fierce into the camera, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80' },
    // ! Starting from here, values repeats, labels are different
    { label: 'https://bestaiprompts.art/img/cine7.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine57.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine42.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine71.jpeg', value: 'full body visible, shot on cinestill 800t 35mm film, with leica m9 Voigtländer 35mm classic, distopian lighting, key visual, character design, looking fierce into the camera, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80' },
    { label: 'https://bestaiprompts.art/img/cine27.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine66.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine46.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine33.jpeg', value: 'full body visible, shot on cinestill 800t 35mm film, with leica m9 Voigtländer 35mm classic, distopian lighting, key visual, character design, looking fierce into the camera, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80' },
  ],
  interior_design: [
    { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine37.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine36.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
  ],
  fashion_design: [
    { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine37.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine36.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
  ],
  food: [
    { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine37.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine36.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
  ],
  graphic_design: [
    { label: 'https://bestaiprompts.art/img/cine17.jpeg', value: 'explosion, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine37.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine36.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
  ],
  illustration: [
    { label: 'https://bestaiprompts.art/img/game26.jpeg', value: 'wicked, renaissance italy in the background, lot of potions in the foreground, epic wide shot, magical lighting, oil painting texture, fine brushwork, atmospheric, Jan van Eyck, Dosso Dossi, Baccio Bandinelli, Leonardo da Vinci, Michelangelo, Albrecht Dürer, Caravaggio, Rembrandt, Jacques-Louis David, atmospheric, in the style of an Old Master --v 4' },
    { label: 'https://bestaiprompts.art/img/cine37.jpeg', value: 'a knife with blood, in a kitchen, talking to a boy, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual, distopian lighting, character design, cinematic colorgrade, highly detailed fabric, perfect teeth, subtle catchlight --q 2 --ar 3:2 --chaos 80 --v 4' },
    { label: 'https://bestaiprompts.art/img/cine36.jpeg', value: 'a girl scared, in the snow, giant strange rabbit, shot on cinestill 800t 35mm film with a leica m9 Voigtländer 35mm classic, key visual,, ominous mood, atmospheric mood, dark evening light, 35mm film, background depth of field, widescreen composition, realistic lens distortion, 8K, tintype photograph --v 4 --ar 3:2 --v 4' },
  ],
}

export function InspirationStep({ prev, next }: WizardStepProps) {
  const { register, watch } = useForm()
  const { artCategory, setArtInspiration } = useOpenAI()
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
          {inspirationStyles[artCategory as keyof typeof inspirationStyles].map((inspiration, index) => (
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
