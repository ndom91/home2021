import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import Meta from "@/components/meta"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className="flex flex-col items-center px-6 duration-500 xl:px-0 dark:bg-gray-900 selection:bg-pink-300 selection:text-white dark:selection:bg-palevioletred"
      style={{
        opacity: "0.9",
        backgroundImage: "radial-gradient(#33333390 0.75px, rgba(0,0,0,0) 0.95px)",
        backgroundSize: "19px 19px",
        backgroundRepeat: "repeat",
      }}
    >
      <Meta />
      <Navbar />
      <main className="flex relative flex-col flex-1 gap-4 items-center w-full max-w-7xl">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
