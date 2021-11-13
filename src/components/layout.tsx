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
    <div className="flex flex-col items-center min-h-screen duration-500 dark:selection:bg-palevioletred selection:text-white dark:bg-gray-500 selection:bg-pink-300">
      <Meta />
      {alert.enabled && !value?.dismissed && (
        <Alert header={alert.header} body={alert.body} setValue={setValue} />
      )}
      <div className="flex flex-col w-full h-screen px-4 lg:py-4 md:px-8 overflow-x-hidden md:max-w-7xl md:overflow-x-visible">
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
