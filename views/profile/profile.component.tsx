import { CollectionCard } from '~/components/collection-card'
import { GridGallery } from '~/components/grid-gallery'

import { ProfileProps } from './profile.type'

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // WIP

export function Profile({}: ProfileProps) {
  return (
    <div className="flex pt-40">
      <GridGallery>
        {collection.map((i) => (
          <CollectionCard key={i}></CollectionCard>
        ))}
      </GridGallery>
    </div>
  )
}
