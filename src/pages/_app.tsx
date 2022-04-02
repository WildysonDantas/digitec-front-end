import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../../public/css/style.css'
import '../styles/features.css'
import '@fortawesome/fontawesome-free/css/all.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line sort-imports
import React from 'react'
config.autoAddCss = true


const myApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default myApp
