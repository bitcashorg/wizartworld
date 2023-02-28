import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="dark scroll-smooth" dir="ltr">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/images/ww-icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/images/ww-icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/images/ww-icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/images/ww-icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/images/ww-icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/images/ww-icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/images/ww-icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/images/ww-icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/images/ww-icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/images/ww-icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/images/ww-icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/images/ww-icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/images/ww-icons/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#013454" />
          <meta name="msapplication-TileImage" content="/ww-icons/ms-icon-144x144.png" />
          <meta name="description" content="Flow Hackathon AI & NFT Project" />

          <Script src="assets/libs/feather-icons/feather.min.js" />
          <Script src="assets/js/plugins.init.js" />
          <Script src="assets/js/app.js" />
        </Head>
        <body className="flex justify-center w-full h-screen text-base align-middle font-urbanist text-black dark:text-white dark:bg-slate-900 overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
