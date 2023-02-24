import React from 'react'

import { HomeWizard } from '~/views/home/home-wizard'
import { WizartLogo } from '~/components/icons'

export default function Home() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!document) return

    document.body.style.overflowY = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <>
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>
      
      {open && <HomeWizard />}

      <section className="relative overflow-hidden">
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
          </div>
        </div>

        <div className="relative animate-[spin_30s_linear_infinite] -z-1">
          <span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
          <span className="after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
        </div>

        <div className="md:mt-36 mt-30">
          <div className="md:flex justify-between items-center">
            <div className="md:w-10/12 md:text-left text-center">
              <h3 className="md:text-[30px] text-[26px] font-semibold">Generated Assets</h3>
            </div>
            {/* <div className="md:w-2/12 text-right md:block hidden">
              <a
                href="collections.html"
                className="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out"
              >
                See More <i className="uil uil-arrow-right"></i>
              </a>
            </div> */}
          </div>

          divb
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow dark:shadow-gray-800 ease-in-out duration-500 m-2">
              <img src="/assets/images/items/1.jpg" className="rounded-lg" alt="" />
            </div>
          ))}
        </div>
      </section>

      <a href="#" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} id="back-to-top" className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-violet-600 text-white leading-9"><i className="uil uil-arrow-up"></i></a>
    </>
  )
}
