import { useEffect } from "react"
// import Alert from './alert'
import Footer from "./footer"
import Navbar from "./nav"
import Meta from "./meta"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      console.log("add dark")
      document.documentElement.classList.add("dark")
    } else {
      console.log("remove dark")
      document.documentElement.classList.remove("dark")
    }
  }, [])
  return (
    <div className="flex flex-col items-center dark:bg-coolGray-900 transition duration-500">
      <Meta />
      <div className="sm:max-w-screen mx-auto min-h-screen md:max-w-5xl">
        {/* <Alert preview={preview} /> */}
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
