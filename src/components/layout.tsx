import Script from "next/script"
import dynamic from "next/dynamic"
import { useLocalStorage } from "react-use"
import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import Meta from "@/components/meta"

const Alert = dynamic(() => import("./alert"), {
  ssr: false,
})

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [value, setValue, remove] = useLocalStorage("ndom91-alert", {
    dismissed: false,
  })
  const alert = {
    enabled: false && !value?.dismissed,
    header: "TEST ALERT",
    body: 'So much stuff to download <a href="#">click here!</a>',
  }

  return (
    <div className="flex flex-col items-center min-h-screen transition duration-500 dark:selection:bg-palevioletred selection:text-white dark:bg-bgGray selection:bg-pink-300">
      {typeof window !== "undefined" && window.location.hostname === "ndo.dev" && (
        <>
          <Script
            src="https://stats.ndo.dev/js/plausible.js"
            data-domain="ndo.dev"
            strategy="afterInteractive"
          />
        </>
      )}
      <Script
        // TODO: Update to latest official release when published
        // src="https://unpkg.com/web-vitals-element@1.0.1/dist/web-vitals-element.styled.min.js"
        src="/assets/web-vitals-element.styled.min.js"
        strategy="afterInteractive"
      />
      <Meta />
      {alert.enabled && !value?.dismissed && (
        <Alert header={alert.header} body={alert.body} setValue={setValue} />
      )}
      <div className="flex-1 w-full mx-auto md:max-w-5xl">
        <Navbar />
        <main className="relative px-4">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
