import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { NavBar } from '../pages/NavBar'
import { Footer } from '../pages/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <NavBar />
    <div className="flex flex-col items-center justify-center min-w-full">
      <Component {...pageProps} />
    </div>
    <Footer />
  </>)
}

export default MyApp;