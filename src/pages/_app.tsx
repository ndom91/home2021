import { AppProps } from "next/app"
import "../styles/index.css"
import "../styles/prism-coldark-dark.css"
import "../styles/prism-coldark-light.css"
import { fonts } from "../lib/fonts"

export default function MyApp({ Component, pageProps }: AppProps) {
  const { inter, victorMono } = fonts
  return (
    <main className={`${inter.className} ${victorMono.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
