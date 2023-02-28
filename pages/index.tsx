import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import { Button } from '~/components/button'
import { CollectionCard } from '~/components/collection-card'
import { GridGallery } from '~/components/grid-gallery'
import { PWADownloadIcon, WizartLogo } from '~/components/icons'
import { ImageAsset } from '~/components/image'
import { gallery, landingAssets } from '~/lib/utils'
import { BeforeInstallPromptEvent } from '~/types'
import { HomeWizard } from '~/views/home/home-wizard'

export default function Home() {
  const [open, setOpen] = React.useState(false)
  const [backToTop, setBackToTop] = React.useState(false)
  const deferrer_prompt = React.useRef<BeforeInstallPromptEvent | null>(null)

  React.useEffect(() => {
    if (!document) return () => {}

    document.body.style.overflowY = open ? 'hidden' : 'auto'

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
    if (!window) return () => {}

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

  // Activating tabs by datasets
  React.useEffect(() => {
    if (!document) return () => {}

    const handleTabClick = (e: Event) => {
      const target = e.target as HTMLElement
      const tab = target.closest('[data-tab]') as HTMLElement

      // if the clicked element is not a tab, we don't do anything
      if (!tab) return

      const tabName = tab.dataset.tab
      const tabContent = document.querySelector(`[data-tab-content="${tabName}"]`) as HTMLElement

      // if the clicked element is not a tab, we don't do anything
      if (!tabContent) return

      const tabs = document.querySelectorAll('[data-tab]') as NodeListOf<HTMLElement>
      const tabContents = document.querySelectorAll('[data-tab-content]') as NodeListOf<HTMLElement>

      // tabs are not active by default, so we need to remove the active class from the clicked tab
      tabs.forEach((tab) =>
        tab.classList.remove(
          'text-yellow-800',
          'dark:text-yellow-300',
          'border-yellow-700',
          'dark:border-yellow-200',
        ),
      )
      tab.classList.add(
        'text-yellow-800',
        'dark:text-yellow-300',
        'border-yellow-700',
        'dark:border-yellow-200',
        'animation-opacity',
      )

      // tab content is hidden by default, so we need to remove the hidden class from the clicked tab content
      tabContents.forEach((tabContent) => tabContent.classList.add('hidden'))
      tabContent.classList.remove('hidden')

      e.preventDefault()
    }

    document.addEventListener('click', handleTabClick)

    return () => {
      document.removeEventListener('click', handleTabClick)
    }
  }, [])

  const navigateToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setBackToTop(false)
  }

  React.useEffect(() => {
    if (!window) return () => { }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()

      deferrer_prompt.current = e
    })

    return () => {
      window.removeEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()

        deferrer_prompt.current = e
      })
    }
  }, [deferrer_prompt.current])

  // get window reference for calls out of useEffect

  // function handler that install the website as a PWA
  const downloadPWA = () => {
    if (!deferrer_prompt.current) return

    deferrer_prompt!.current.prompt()

    deferrer_prompt!.current.userChoice.then((choice: any) => {
      console.log(`User ${choice.outcome} the A2HS prompt`)

      deferrer_prompt.current = null
    })
  }

  return (
    <>
      <span className="z-0 fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>

      {open && <HomeWizard />}

      {/* // * HERO SECTION STARTS // */}
      <section className="relative px-5 overflow-hidden">
        <div className="grid grid-cols-1 justify-center text-center min-h-[calc(93vh-60px)] items-center">
          <div className="relative">
            <div className="relative mb-5">
              <span className="flex items-center justify-center w-full sm:mb-20">
                <WizartLogo width={600} height={200} className="filter invert dark:invert-0" />
              </span>
              <h1 className="text-4xl font-bold leading-snug whitespace-pre-line lg:leading-snug lg:text-6xl">
                {/* TODO: CSS ANIMATION */}
                Unleashing The Artist In You{'\n'}
                Rewarding Your Unique Imagination{'\n'}
                <span className="text-transparent bg-gradient-to-l from-red-600 to-violet-600 bg-clip-text">
                  AI + NFTs
                </span>
              </h1>

              <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:left-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:right-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <Button
                variant="primary"
                size="xl"
                onClick={() => setOpen(true)}
                label="Create Your NFT"
                className="max-w-[300px]"
              />
            </div>

            <a
              className="flex items-center justify-center w-full mt-10 border-0 border-none btn"
              href="#assets"
            >
              <Image
                src="/images/chevron-down.png"
                className="ml-auto mr-auto"
                alt=""
                width={42}
                height={42}
              />
            </a>
          </div>
        </div>

        <div className="relative animate-[spin_30s_linear_infinite] -z-1">
          <span className="relative after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 after:z-10"></span>
          <span className="relative after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 after:z-10"></span>
        </div>
      </section>
      {/* // * HERO SECTION ENDS // */}

      {/* // * TABS SECTION STARTS // */}
      <section className="relative px-5 mt-40 z-1 md:mt-36" id="assets">
        <h2 className="w-full mb-10 text-6xl font-bold text-center">NFTs</h2>

        <ul
          className="flex flex-col flex-wrap items-center justify-center w-full pl-0 mb-4 list-none border-b-0 md:flex-row"
          role="tablist"
        >
          <li
            role="presentation"
            data-tab="tabs-home"
            className="p-3 text-yellow-800 transition-all duration-75 border-b-8 border-transparent border-yellow-700 cursor-pointer dark:text-yellow-300 dark:border-yellow-200 hover:animate-pulse"
          >
            <span
              className="w-full mb-10 text-4xl font-bold leading-loose md:text-5xl"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              Generated
            </span>
          </li>
          <span className="hidden mx-6 text-4xl font-bold md:flex md:text-5xl">|</span>
          <li
            role="presentation"
            data-tab="tabs-profile"
            className="p-3 transition-all duration-75 border-b-8 border-transparent cursor-pointer hover:animate-pulse"
          >
            <span
              className="w-full mb-10 text-4xl font-bold leading-loose text-center md:text-5xl"
              aria-controls="tabs-profile"
              aria-selected="false"
              role="tab"
            >
              Fan Created
            </span>
          </li>
        </ul>

        <div className="my-10">
          <div
            className="transition-opacity duration-150 ease-linear"
            data-tab-content="tabs-home"
            aria-labelledby="tabs-home-tab"
            role="tabpanel"
          >
            {Object.keys(landingAssets).map((item, index) => (
              <div key={index}>
                <h3 className="mt-10 mb-6 text-3xl font-semibold capitalize md:text-4xl">
                  {item.replace(/_/g, ' ')}
                </h3>

                <div className="flex flex-wrap items-center justify-center flex-1 snap-y snap-proximity">
                  {landingAssets[item as keyof typeof landingAssets].map((asset, index) => (
                    <div
                      key={`generated-asset-${index}`}
                      className="flex snap-center scroll-mb-24 w-auto max-w-full sm:max-w-[42%] h-[50vh] sm:h-[400px] lg:h-[450px] group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow dark:shadow-gray-800 ease-in-out duration-500 m-2"
                    >
                      <ImageAsset src={asset} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="hidden transition-opacity duration-150 ease-linear"
            data-tab-content="tabs-profile"
            aria-labelledby="tabs-profile-tab"
            role="tabpanel"
          >
            {gallery.map((collection, index) => (
              <div key={index} className="pt-7">
                <h3 className="flex items-center gap-3 mt-10 mb-6 text-3xl font-semibold capitalize sm:gap-5 flex-nowrap md:text-4xl">
                  {collection.title}
                  {collection.icon ? (
                    <i className="h-[48px] p-1">
                      <Image
                        src={collection.icon}
                        sizes="x2"
                        className={clsx(
                          'object-contain',
                          'w-full',
                          'h-full',
                          collection.icon.match(/(top-shot|evo-|ufc-|nfl-|laliga-)/g)
                            ? 'invert dark:invert-0'
                            : '',
                        )}
                        alt=""
                        width={42}
                        height={42}
                      />
                    </i>
                  ) : null}
                </h3>
                <GridGallery>
                  <React.Suspense
                    fallback={
                      <div className="relative p-3 m-2 overflow-hidden duration-500 ease-in-out bg-white rounded-lg shadow group dark:bg-slate-900 dark:shadow-gray-800"></div>
                    }
                  >
                    {collection.items.map((item, index) => (
                      <CollectionCard item={item} index={index} key={index} />
                    ))}
                  </React.Suspense>
                </GridGallery>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* // * TABS SECTION ENDS // */}

      {/* TODO: Show Animation */}
      {deferrer_prompt.current ? (
        <Button
          onClick={downloadPWA}
          variant="tertiary"
          size="normal"
          className="fixed flex w-12 h-12 pl-1 pr-1 leading-9 text-center text-white rounded-full hover:animate-bounce bottom-5 left-5"
        >
          <PWADownloadIcon />
        </Button>
      ) : null}

      {backToTop ? (
        <Button
          onClick={navigateToTop}
          variant="tertiary"
          size="normal"
          className="fixed flex w-12 h-12 leading-9 text-center text-white rounded-full hover:animate-bounce bottom-5 right-5"
        >
          <Image
            src="/images/chevron-down.png"
            className="scale-[-1]"
            alt=""
            width={32}
            height={32}
          />
        </Button>
      ) : null}
    </>
  )
}
