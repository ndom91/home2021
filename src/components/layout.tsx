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
    <div className="dark:selection:bg-palevioletred flex flex-col items-center min-h-screen selection:text-white dark:bg-bgGray selection:bg-pink-300 transition duration-500">
      <Meta />
      {alert.enabled && <Alert header={alert.header} body={alert.body} />}
      <div className="flex-1 mx-auto w-full md:max-w-5xl">
        <Navbar />
        <main className="relative px-4">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
