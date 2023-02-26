export type CollectionCardComponentProps = {
  item: Partial<CollectionCardProps>
  // ? for the mock data
  index: number
}

export type CollectionCardProps = {
  asset: string
  avatar: string
  title: string
  description: string
  creator: string
  collection: string
}
