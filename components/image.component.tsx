import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { ImageAssetProps } from "~/types";

export function ImageAsset({ src, alt }: ImageAssetProps) {
  const [loading, setLoading] = React.useState(true)

  return (
    <picture className="asset-image-wrapper">
      <Image
        src={src}
        alt={alt || ''}
        style={{ objectFit: "cover" }}
        width={180}
        height={320}
        sizes="x2"
        className={clsx(
          'h-[300px] duration-700 ease-in-out',
          loading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </picture>
  )
}