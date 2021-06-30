import {AppProps} from 'next/app';
import '../styles/globale.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
