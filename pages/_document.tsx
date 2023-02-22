import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="dark scroll-smooth">
        <Head>
          <meta name="description" content="Flow Hackathon AI Project" />
        </Head>
        <body className="flex justify-center w-full h-screen text-base text-black align-middle font-urbanist dark:text-white dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
