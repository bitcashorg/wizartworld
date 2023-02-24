import { W, w } from 'windstitch'

import { t } from '~/lib/styles'

interface TextProps {}

const TextStyled = w.button(t``, {
  variants: {
    variant: {
      'display-1': t`font-bold text-2xl`,
      loading: t`font-bold text-2xl text-black`,
    },
  },
  defaultVariants: {
    variant: 'display-1',
  },
})

type TextStyledProps = W.Infer<typeof TextStyled>

export const Text: React.FC<React.ComponentPropsWithoutRef<'p'> & TextStyledProps & TextProps> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <TextStyled variant={variant} {...props}>
      {children}
    </TextStyled>
  )
}
