import { AppProps } from "next/app"
import "../styles/index.css"
// import "../styles/prism-ghcolors.css"
// import "../styles/prism-materialOceanic.css"
// import "../styles/prisma-synthwave84.css"
import "../styles/prism-dracula.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
