import { AppProps } from "next/app"
import { Inter } from "next/font/google"
import "../styles/index.css"
import "../styles/prism-coldark-dark.css"
import "../styles/prism-coldark-light.css"

const inter = Inter({ weight: ["100", "300", "900"], display: "swap", subsets: ["latin"] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
