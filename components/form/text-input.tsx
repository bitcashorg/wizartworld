import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form'

import { FormField, Input } from '~/components'

interface TextInputProps {
  id: string
  formProps: UseFormRegisterReturn
  placeholder?: string
  defaultValue?: string
  transparent?: boolean
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  placeholder,
  defaultValue,
  formProps,
  transparent,
}) => (
  <FormField>
    <Input
      type="text"
      id={`form_${id}_input`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      transparent={Boolean(transparent)}
      {...formProps}
    />
  </FormField>
)
