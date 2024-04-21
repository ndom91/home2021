import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import Meta from "@/components/meta"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className="flex overflow-hidden overflow-y-auto flex-col items-center px-6 h-full duration-500 xl:px-0 dark:bg-gray-900 selection:bg-pink-300 selection:text-white dark:selection:bg-palevioletred"
      style={{
        opacity: "0.9",
        backgroundImage: "radial-gradient(#33333390 0.5px, rgba(0,0,0,0) 0.5px)",
        backgroundSize: "19px 19px",
        backgroundRepeat: "repeat",
      }}
    >
      <Meta />
      <Navbar />
      <main className="flex relative flex-col flex-1 items-center max-w-7xl">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
