import { Replicate } from '~/components/replicate'

export default function Home() {
  return (
    <div className='bg-slate-900 text-gray-50 px-[100px]'>
      <Replicate />
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40" />
    </div>
  )
}
