import { useTheme } from 'next-themes'
import React from 'react'

import { Button } from '~/components/button'

export const ButtonThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      label="Toggle Theme"
    />
  )
}
