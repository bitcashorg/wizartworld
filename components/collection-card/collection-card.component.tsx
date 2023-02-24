import { CollectionCardProps } from './collection-card.type'

// WIP
export function CollectionCard({}: CollectionCardProps) {
  return (
    <div className="relative p-3 m-2 overflow-hidden duration-500 ease-in-out bg-white rounded-lg shadow group dark:bg-slate-900 dark:shadow-gray-800">
      <img src="assets/images/items/1.jpg" className="rounded-lg" alt="" />
      <div className="relative p-4 -mt-14">
        <div className="relative inline-block">
          <img
            src="assets/images/avatar/1.jpg"
            className="h-16 rounded-md shadow-md dark:shadow-gray-800"
            alt=""
          />
          <i className="absolute text-2xl mdi mdi-check-decagram text-emerald-600 -bottom-3 -right-2"></i>
        </div>

        <div className="mt-3">
          <a
            href="explore-one.html"
            className="font-semibold block text-[18px] hover:text-violet-600"
          >
            Digital Collection
          </a>
          <span className="mt-1 text-sm text-slate-400">
            <span className="italic">by</span>{' '}
            <a href="creator-profile.html" className="font-medium text-violet-600">
              @CutieGirl
            </a>
          </span>
          <span className="text-slate-400 block text-[16px] mt-1">25 Items</span>
        </div>
      </div>
    </div>
  )
}
