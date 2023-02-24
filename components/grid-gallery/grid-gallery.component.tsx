import { GridGalleryProps } from './grid-gallery.type'

export function GridGallery({ children }: GridGalleryProps) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
      {children}
    </div>
  )
}
