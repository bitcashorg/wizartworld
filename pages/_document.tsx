import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="dark scroll-smooth" dir="ltr">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="description" content="Flow Hackathon AI & NFT Project" />

          <Script src="assets/libs/feather-icons/feather.min.js" />
          <Script src="assets/js/plugins.init.js" />
          <Script src="assets/js/app.js" />
        </Head>
        <body className="flex justify-center w-full h-screen text-base align-middle font-urbanist text-black dark:text-white dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
