import React from 'react'

import { HomeWizard } from '~/views/home/home-wizard'
import { WizartLogo } from '~/components/icons'
import Image from 'next/image'
import { ImageAsset } from '~/components/image'

const landingAssets = {
  'movies_🎥': [
    '/images/movie1.png',
    '/images/movie2.png',
    '/images/movie3.png',
    '/images/movie4.png',
    '/images/movie5.png',
    '/images/movie6.png',
    '/images/movie7.png',
    '/images/movie8.png',
    '/images/movie9.png',
    '/images/movie10.png',
    '/images/movie11.png',
    '/images/movie12.png',
  ],
  'video_games_🎮': [
    '/images/game1.png',
    '/images/game2.png',
    '/images/game3.png',
    '/images/game4.png',
    '/images/game5.png',
    '/images/game6.png',
    '/images/game7.png',
  ]
}

export default function Home() {
  const [open, setOpen] = React.useState(false)
  const [backToTop, setBackToTop] = React.useState(false)

  React.useEffect(() => {
    if (!document) return

    document.body.style.overflowY = open ? 'hidden' : 'auto'
  }, [open])

  React.useEffect(() => {
    if (!document) return () => {}

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  // on scroll listener, to set a boolean to true when the user scrolls down higher than current screen
  // then, when the user clicks on the button, it will scroll to the top of the screen
  React.useEffect(() => {
    if (!document) return () => {}

    const handleScroll = () => {
      if (backToTop) return

      if (window.scrollY > window.innerHeight) {
        setBackToTop(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigateToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setBackToTop(false)
  }

  return (
    <>
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>
      
      {open && <HomeWizard />}

      <section className="relative overflow-hidden px-5">
        <div className="grid grid-cols-1 justify-center text-center h-[calc(93vh-60px)] items-center">
          <div className="relative">
            <div className="relative mb-5">
              <span className="flex w-full items-center justify-center mb-24">
                <WizartLogo width={600} height={200} />
              </span>
              <h1 className="font-bold whitespace-pre-line lg:leading-snug leading-snug text-4xl lg:text-6xl">
                {/* TODO: CSS ANIMATION */}
                Unleashing The Artist In You{'\n'}
                Rewarding Your Unique Imagination{'\n'}
                <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">
                  AI + NFTs
                </span>
              </h1>

              <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:left-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:right-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
            </div>

            <div className="mt-8">
              <button
                className="btn btn-lg bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full"
                onClick={() => setOpen(true)}
              >
                Create Your NFT
              </button>
            </div>

            <a className="btn border-0 absolute flex w-full justify-center items-center mt-20" href="#assets">
              <Image src="/images/icons8-chevron-down-96.png" alt="" width={42} height={42} />
            </a>
          </div>
        </div>

        <div className="relative animate-[spin_30s_linear_infinite] -z-1">
          <span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
          <span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
        </div>
      </section>

      <section className="md:mt-36 mt-30 px-5" id="assets">
        <div className="md:w-10/12 md:text-left text-center mb-10">
          <h2 className="md:text-4xl text-3xl font-semibold">Generated Assets</h2>
        </div>

        {Object.keys(landingAssets).map((item, index) => (
          <>
            <h3 className="capitalize md:text-4xl text-3xl font-semibold mt-20 mb-6">{item.replace(/_/g, ' ')}</h3>

            <div className="flex flex-wrap flex-1 items-center justify-evenly snap-y snap-proximity">
              {landingAssets[item as keyof typeof landingAssets].map((asset, index) => (
                <div key={`generated-asset-${index}`} className="snap-center max-w-[45%] scroll-mb-24 group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow dark:shadow-gray-800 ease-in-out duration-500 m-2">
                  <ImageAsset src={asset} alt="" />
                </div>
              ))}
            </div>
          </>
        ))}
      </section>

      <a href="#" onClick={navigateToTop} id="back-to-top" className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-violet-600 text-white leading-9"><i className="uil uil-arrow-up"></i></a>
    </>
  )
}
