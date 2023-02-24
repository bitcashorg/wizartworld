import { motion } from 'framer-motion'
import * as React from 'react'
import { W, w } from 'windstitch'

import { t } from '~/lib/styles'

import { Text } from '../text/text'

export const Form = w(motion.form, {
  className: t`
    relative
    w-full
    max-w-[624px]
    h-max
    my-regular
    [&>div]:w-full
   `,
})
export type FormProps = W.Infer<typeof Form>

export const FormRowWrapper = w(motion.div, {
  className: t`
    flex
    items-start
    justify-start
    mb-large
    gap-small
    [&>fieldset]:w-6/12
    [&>fieldset]:mb-[4px]
   `,
})
export type FormRowWrapperProps = W.Infer<typeof FormRowWrapper>

export const FormField = w(motion.fieldset, {
  className: t`
    flex
    flex-col
    w-full
    gap-xxx-small
    mb-large
    relative
   `,
})
export type FormFieldProps = W.Infer<typeof FormField>

export const FormActionWrapper = w(motion.div, {
  className: t`
   `,
})
export type FormActionWrapperProps = W.Infer<typeof FormActionWrapper>

export const Label = (props: LabelProps) => {
  return <Text {...props} />
}

interface LabelProps {
  required?: boolean
  hidden?: boolean
  className?: string
  children: string[] | string | number | React.ReactElement | JSX.Element | React.ReactNode
}

export const Input = w.input(
  t`
  bg-white/[0.07]
  border-y-[0.5]
  border-x-[0.5]
  border-white/[0.3]
  rounded-md`,
  {
    variants: {
      transparent: (yes: boolean) => (yes ? 'bg-transparent' : ''),
    },
    defaultVariants: {
      transparent: false,
    },
  },
)
export type InputProps = W.Infer<typeof Input>
