import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import Meta from "@/components/meta"
import MaskPost from "@/components/mask-post"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className="flex flex-col items-center px-6 duration-500 xl:px-0 dark:bg-gray-900 selection:bg-pink-300 selection:text-white dark:selection:bg-palevioletred"
      style={{
        opacity: "0.8",
        backgroundImage: "radial-gradient(#33333390 0.5px, rgba(0,0,0,0) 0.5px)",
        backgroundSize: "19px 19px",
        backgroundRepeat: "repeat",
      }}
    >
      <Meta />
      <MaskPost />
      <Navbar />
      <main className="flex relative flex-col flex-1 gap-8 items-center px-4 w-full max-w-7xl lg:gap-16 lg:px-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
