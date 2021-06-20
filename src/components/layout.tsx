import Script from "next/script"
import Alert from "@/components/alert"
import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import Meta from "@/components/meta"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const alert = {
    enabled: false,
    header: "TEST ALERT",
    body: 'So much stuff to download <a href="#">click here!</a>',
  }

  return (
    <div className="flex flex-col items-center min-h-screen transition duration-500 dark:selection:bg-palevioletred selection:text-white dark:bg-bgGray selection:bg-pink-300">
      {typeof window !== "undefined" &&
        window.location.hostname === "home2021.vercel.app" && (
          <Script
            src="https://stats.ndo.dev/js/plausible.js"
            data-domain="home2021.vercel.app"
            strategy="afterInteractive"
          />
        )}
      <Meta />
      {alert.enabled && <Alert header={alert.header} body={alert.body} />}
      <div className="flex-1 w-full mx-auto md:max-w-5xl">
        <Navbar />
        <main className="relative px-4">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
