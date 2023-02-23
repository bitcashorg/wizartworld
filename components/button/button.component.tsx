import { w } from 'windstitch'

import { t } from '~/lib/styles'

import { ButtonProps } from './button.type'

export function Button({ label, ...props }: ButtonProps) {
  return <ButtonVariants {...props}>{label}</ButtonVariants>
}

export const ButtonVariants = w.button(
  t`px-4 py-2 text-gray-700 transition duration-500  border rounded-md select-none ease focus:outline-none focus:shadow-outline`,
  {
    variants: {
      variant: {
        primary: t`bg-wz-purple-500 border-wz-purple-500 text-white hover:bg-wz-purple-600`,
        secondary: t`text-gray-700  bg-gray-200 border-gray-200 hover:bg-gray-300`,
      },
      size: {
        normal: t``,
        full: t`w-full text-white text-xl font-semibold`,
      },
    },
    defaultVariants: {
      size: 'normal',
      variant: 'secondary',
    },
  },
)

ButtonVariants.displayName = 'ButtonVariants'
