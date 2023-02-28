import React from 'react'

import { Button } from '~/components/button'
import { useGlobalContext } from '~/context/global.context'

export const ButtonSettings = () => {
  const { toggleSettings } = useGlobalContext()
  return (
    <Button
      variant="transparent"
      border="sm"
      className="w-12 h-12 rounded-full "
      onClick={toggleSettings}
    >
      <i className="uil uil-setting text-[26px] text-green-50"></i>
    </Button>
  )
}
