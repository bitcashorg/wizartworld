import Image from 'next/image'
import { CollectionCardComponentProps, CollectionCardProps } from './collection-card.type'
import React from 'react'
import { titles, usernames } from '~/lib/utils'
import { ImageAsset } from '~/components/image'
import { useEffectOnce } from 'react-use';

// WIP
export function CollectionCard({ item, index }: CollectionCardComponentProps) {
  const [title, setTitle] = React.useState('')
  const [user, setUser] = React.useState('')

  useEffectOnce(() => {
    const getRandomTitle = titles()[index || (Math.random() * titles.length)]
    const getRandomUser = usernames()[index || (Math.random() * usernames.length)]

    setTitle(getRandomTitle)
    setUser(getRandomUser)
  })

  return (
    <div className="relative p-3 m-2 overflow-hidden duration-500 ease-in-out bg-white rounded-lg shadow group dark:bg-slate-900 dark:shadow-gray-800">
      <div className="h-[300px]">
        <ImageAsset src={item.asset || '/assets/images/items/1.jpg'} alt="" width={300} height={300} />
      </div>
      <div className="relative p-4 -mt-14">
        <div className="relative inline-block bg-slate-800 rounded-xl">
          <Image
            src={item.avatar || '/assets/images/avatar/1.jpg'}
            className="h-16 rounded-md shadow-md dark:shadow-gray-800"
            alt=""
            width={64}
            height={64}
          />
          <i className="absolute text-2xl mdi mdi-check-decagram text-emerald-600 -bottom-3 -right-2"></i>
        </div>

        <div className="mt-3">
          <p className="font-semibold block text-[18px] hover:text-violet-600 capitalize cursor-pointer">
            {item.title || title}
          </p>
          <a href="creator-profile.html" className="font-medium text-violet-600">
            @{user}
          </a>
        </div>
      </div>
    </div>
  )
}
