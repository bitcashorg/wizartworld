import Image from 'next/image'
import React from 'react'
import { useEffectOnce } from 'react-use'

import { ImageAsset } from '~/components/image'
import { titles, usernames } from '~/lib/utils'

import { CollectionCardComponentProps, CollectionCardProps } from './collection-card.type'

// WIP
export function CollectionCard({ item, index }: CollectionCardComponentProps) {
  const [title, setTitle] = React.useState('')
  const [user, setUser] = React.useState('')

  useEffectOnce(() => {
    const getRandomTitle = titles()[index || Math.random() * titles.length]
    const getRandomUser = usernames()[index || Math.random() * usernames.length]

    setTitle(getRandomTitle)
    setUser(getRandomUser)
  })

  return (
    <>
      <div className="relative p-2 overflow-hidden transition-all duration-500 bg-white border border-gray-100 rounded-lg group dark:bg-slate-900 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 hover:-mt-2 h-fit">
        <div className="flex absolute px-3 top-1 z-10 right-3 bg-slate-100 dark:bg-slate-600 w-auto font-extrabold rounded-2xl shadow-sm leading-tight drop-shadow-md text-[16px] mt-1">
          #{Math.floor(Math.random() * 99 + (index || 1))}
        </div>
        <div className="h-[300px] overflow-hidden rounded-lg">
          <ImageAsset
            src={item.asset || '/assets/images/items/1.jpg'}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="relative p-4 -mt-14">
          <div className="relative inline-block rounded-md bg-slate-200 dark:bg-slate-800">
            <Image
              src={item.avatar || '/assets/images/avatar/1.jpg'}
              className="object-cover object-top h-16 rounded-md shadow-md dark:shadow-gray-800"
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
    </>
  )
}

// ! Template with pPRICE

// <div className="relative p-2 overflow-hidden transition-all duration-500 bg-white border border-gray-100 rounded-lg group dark:bg-slate-900 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 hover:-mt-2 h-fit">
//   <div className="flex absolute px-3 top-1 z-10 left-2 bg-slate-100 dark:bg-slate-600 w-auto font-extrabold rounded-2xl shadow-sm leading-tight drop-shadow-md text-[16px] mt-1">#{Math.floor(Math.random() * 99 + (index || 1))}</div>
//   <div className="relative overflow-hidden">
//     <div className="relative overflow-hidden rounded-lg max-h-[300px]">
//       <ImageAsset src={item.asset || '/assets/images/items/1.jpg'} alt="" width={300} height={300} />
//     </div>

//     <div className="absolute transition-all duration-500 opacity-0 top-2 right-2 group-hover:opacity-100">
//       <a
//         href="javascript:void(0)"
//         className="text-white rounded-full btn btn-icon btn-sm bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700"
//       >
//         <i className="mdi mdi-plus"></i>
//       </a>
//     </div>
//   </div>

//   <div className="relative px-4 -mt-14">

//     <div className="relative inline-block rounded-md bg-slate-200 dark:bg-slate-800">
//       <Image
//         src={item.avatar || '/assets/images/avatar/1.jpg'}
//         className="object-cover object-top h-16 rounded-md shadow-md dark:shadow-gray-800"
//         alt=""
//         width={64}
//         height={64}
//       />
//       <i className="absolute text-2xl mdi mdi-check-decagram text-emerald-600 -bottom-3 -right-2"></i>
//     </div>
//     <div className="my-3">
//       <a href="item-detail.html" className="font-semibold hover:text-violet-600">
//         {item.title || title}
//       </a>
//     </div>
//   </div>
//   <div className="mt-3">
//     <div className="flex justify-between p-2 rounded-lg shadow bg-gray-50 dark:bg-slate-800 dark:shadow-gray-700">
//       <a href="creator-profile.html" className="mt-auto font-medium text-violet-600">
//         @{user}
//       </a>

//       <div>
//         <span className="text-[16px] font-medium text-slate-400 block">Price</span>
//         <span className="text-[16px] font-semibold block">
//           {/* TODO: Flow icon */}
//           <i className="mdi mdi-flow"></i> 3.5 FLOW
//         </span>
//       </div>
//     </div>
//   </div>
// </div>
