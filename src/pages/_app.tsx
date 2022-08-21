import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/prism-coldark-dark.css'
import '../styles/prism-coldark-light.css'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
