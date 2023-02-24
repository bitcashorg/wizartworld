import React from 'react'

import { HomeWizard } from '~/views/home/home-wizard'
import { WizartLogo } from '~/components/icons'
import Image from 'next/image'
import { ImageAsset } from '~/components/image'

const landingAssets = {
  'cinema_🎥': [
    '/images/movie1.png',
    '/images/movie2.png',
    '/images/movie3.png',
    '/images/movie4.png',
    '/images/movie5.png',
    '/images/movie6.png',
    '/images/movie7.png',
    '/images/movie8.png',
    '/images/movie10.png',
    '/images/movie11.png',
    '/images/movie12.png',
    'https://bestaiprompts.art/img/cine102.jpeg',
    'https://bestaiprompts.art/img/cine103.jpeg',
    '/images/movie9.png',
  ],
  'video_games_🎮': [
    '/images/game1.png',
    '/images/game2.png',
    '/images/game3.png',
    '/images/game4.png',
    '/images/game5.png',
    '/images/game6.png',
    '/images/game7.png',
    'https://bestaiprompts.art/img/game81.jpeg',
    'https://bestaiprompts.art/img/game34.jpeg',
    'https://bestaiprompts.art/img/game90.jpeg',
    'https://bestaiprompts.art/img/game19.jpeg',
    'https://bestaiprompts.art/img/game70.jpeg',
    'https://bestaiprompts.art/img/game96.jpeg',
    'https://bestaiprompts.art/img/game99.jpeg',

  ],
  'graphic_design_🌁': [
    '/images/graphic1.png',
    '/images/graphic2.png',
    '/images/graphic3.png',
    '/images/graphic4.png',
    '/images/graphic5.png',
    '/images/graphic6.png',
    '/images/graphic7.png',
    '/images/graphic8.png',
    '/images/graphic9.png',
    '/images/graphic10.png',
    '/images/graphic11.png',
  ],
  'illustration_🎨': [
    '/images/illu1.png',
    '/images/illu2.png',
    '/images/illu3.png',
    '/images/illu4.png',
    '/images/illu5.png',
    '/images/illu6.png',
    '/images/illu7.png',
    '/images/illu8.png',
    '/images/illu9.png',
    '/images/illu10.png',
    '/images/illu11.png',
    '/images/illu12.png',
    '/images/illu13.png',
    '/images/illu14.png',
  ],
  'interior_design_🏠': [
    '/images/interior1.png',
    '/images/interior2.png',
    '/images/interior3.png',
    '/images/interior4.png',
    '/images/interior5.png',
    '/images/interior6.png',
    '/images/interior7.png',
    '/images/interior8.png',
    '/images/interior9.png',
    '/images/interior10.png',
    '/images/interior11.png',
    '/images/interior12.png',
  ],
  'fashion_design_👗': [
    '/images/fashion1.png',
    '/images/fashion2.png',
    '/images/fashion3.png',
    '/images/fashion4.png',
    '/images/fashion5.png',
    '/images/fashion6.png',
    '/images/fashion7.png',
    '/images/fashion8.png',
    '/images/fashion9.png',
    '/images/fashion10.png',
    '/images/fashion11.png',
    '/images/fashion12.png',
    '/images/fashion13.png',
    '/images/fashion14.png',
    '/images/fashion15.png',
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
    if (!document) return () => { }

    const handleScroll = () => {
      // ? debounce the scroll event to avoid performance issues on mobile devices (scrolling is very sensitive)
      const timeout = setTimeout(() => {
        setBackToTop(window.scrollY > window.innerHeight)        
        
        clearTimeout(timeout)
      }, 100)
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

            <a className="btn border-0 absolute flex w-full justify-center items-center mt-10" href="#assets">
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
        <h2 className="md:text-5xl text-4xl text-center font-bold w-full mb-10">Generated Assets</h2>

        {Object.keys(landingAssets).map((item, index) => (
          <>
            <h3 className="capitalize md:text-4xl text-3xl font-semibold mt-20 mb-6">{item.replace(/_/g, ' ')}</h3>

            <div className="flex flex-wrap flex-1 items-center justify-center snap-y snap-proximity">
              {landingAssets[item as keyof typeof landingAssets].map((asset, index) => (
                <div key={`generated-asset-${index}`} className="snap-center max-w-[45%] scroll-mb-24 group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow dark:shadow-gray-800 ease-in-out duration-500 m-2">
                  <ImageAsset src={asset} alt="" />
                </div>
              ))}
            </div>
          </>
        ))}
      </section>

      {/* TODO: Show Animation */}
      {backToTop ? (
        <button onClick={navigateToTop} className="btn-multicolor animate-bounce w-12 h-12 fixed flex text-lg rounded-full border-purple-800 bg-violet-900 bottom-5 right-5 text-center bg-transparent text-white leading-9">
          <Image src="/images/icons8-chevron-down-96.png" className="scale-[-1]" alt="" width={32} height={32} />
        </button>
      ) : null}
    </>
  )
}
