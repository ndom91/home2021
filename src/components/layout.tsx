// import Alert from './alert'
import Footer from "./footer"
import Navbar from "./nav"
import Meta from "./meta"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen sm:max-w-screen md:max-w-6xl mx-auto">
        {/* <Alert preview={preview} /> */}
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
