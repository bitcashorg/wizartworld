import { w } from 'windstitch'

import { t } from '~/lib/styles'

import { ButtonProps } from './button.type'

export function Button({ label, ...props }: ButtonProps) {
  return <ButtonVariants {...props}>{label}</ButtonVariants>
}

export const ButtonVariants = w.button(
  t`px-4 py-2 text-gray-700 transition duration-500  border rounded-2xl select-none ease focus:outline-none focus:shadow-outline`,
  {
    variants: {
      variant: {
        primary: t`bg-wz-purple-500 border-wz-purple-500 text-white hover:bg-wz-purple-600`,
        secondary: t`text-gray-700  bg-gray-200 border-gray-200 hover:bg-gray-300`,
        tertiary: t`items-center justify-center bg-gradient-to-r from-violet-600 to-red-600 p-0 font-bold opacity-100 transition-all hover:opacity-80`,
      },
      size: {
        normal: t``,
        full: t`w-full text-white text-xl font-semibold`,
        lg: t`w-full text-white text-xl font-bold btn-lg`,
        xl: t`w-full text-white text-2xl font-bold h-16`,
      },
    },
    defaultVariants: {
      size: 'normal',
      variant: 'secondary',
    },
  },
)

ButtonVariants.displayName = 'ButtonVariants'
