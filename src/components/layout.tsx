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
          <Script src="/p.js" data-domain="ndo.dev" data-api="/a/e" />
        </>
      )}
      <Script src="/assets/web-vitals-element.styled.min.js" />
      <Meta />
      {alert.enabled && !value?.dismissed && (
        <Alert header={alert.header} body={alert.body} setValue={setValue} />
      )}
      <div className="flex-1 w-full mx-auto overflow-x-hidden md:max-w-5xl md:overflow-x-visible">
        <Navbar />
        <main className="relative px-4">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
