import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import { ImageAssetProps } from './image-component.type'

export function ImageAsset({ src, alt, width, height, preview }: ImageAssetProps) {
  const [loading, setLoading] = React.useState(true)

  return (
    <picture className={clsx('asset-image-wrapper', preview ? 'asset-image-wrapper--preview' : '')}>
      <Image
        src={src}
        alt={alt || ''}
        width={width || 180}
        height={height || 320}
        sizes="x2"
        className={loading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}
        onLoadingComplete={() => setLoading(false)}
      />
    </picture>
  )
}
