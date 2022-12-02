import '../styles/globals.css'
import '../styles/index.css'
import {Component} from 'react'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
