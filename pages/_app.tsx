import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import UIkit from 'uikit'

// @ts-ignore
import Icons from 'uikit/dist/js/uikit-icons'

import '../styles/globals.scss'
import "nprogress/nprogress.css"
import "uikit/dist/css/uikit.min.css"
import "highlight.js/styles/an-old-hope.css"
import NavBar from '@features/layout/NavBar'
import Footer from '@features/layout/Footer'
import { FeaturedPostsProvider } from '@hooks/featured-posts'

const ProgressBar = dynamic(() => import('@features/layout/ProgressBar'), { ssr: false })

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  /**
   * set theme
   */
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.classList.remove('uk-background-secondary', 'uk-light');
    }
    // @ts-ignore
    UIkit.use(Icons)
  }, []);

  return (
    <FeaturedPostsProvider>
      <ProgressBar />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </FeaturedPostsProvider>
  )
}

export default App
