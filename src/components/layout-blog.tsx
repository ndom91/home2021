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
  const [value, setValue] = useLocalStorage("ndom91-alert", {
    dismissed: false,
  })
  const alert = {
    enabled: false && !value?.dismissed,
    header: "TEST ALERT",
    body: 'So much stuff to download <a href="#">click here!</a>',
  }

  return (
    <div
      className="flex flex-col items-center h-full min-h-screen duration-500 dark:bg-gray-900 selection:bg-pink-300 selection:text-white dark:selection:bg-palevioletred"
      style={{
        opacity: "0.9",
        backgroundImage: "radial-gradient(#33333390 0.75px, rgba(0,0,0,0) 0.95px)",
        backgroundSize: "19px 19px",
        backgroundRepeat: "repeat",
      }}
    >
      <Meta />
      {alert.enabled && !value?.dismissed && (
        <Alert header={alert.header} body={alert.body} setValue={setValue} />
      )}
      <div className="flex flex-col justify-center items-center px-4 w-full max-w-full min-h-screen bg-white md:overflow-x-visible md:px-8 lg:py-4 dark:bg-gray-900 md:max-w-8xl">
        <Navbar />
        <main className="flex relative flex-col flex-1 items-center max-w-full">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
