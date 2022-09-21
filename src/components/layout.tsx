import dynamic from 'next/dynamic'
import { useLocalStorage } from 'react-use'
import Footer from '@/components/footer'
import Navbar from '@/components/nav'
import Meta from '@/components/meta'

const Alert = dynamic(() => import('./alert'), {
  ssr: false,
})

type Props = {
  children: React.ReactNode
  onPointerMove?: (e: PointerEvent) => void
}

const Layout = ({ children, onPointerMove }: Props) => {
  const [value, setValue] = useLocalStorage('ndom91-alert', {
    dismissed: false,
  })
  const alert = {
    enabled: false && !value?.dismissed,
    header: 'TEST ALERT',
    body: 'So much stuff to download <a href="#">click here!</a>',
  }

  return (
    <div
      className="flex h-full min-h-screen flex-col items-center duration-500 selection:bg-pink-300 selection:text-white dark:bg-gray-500 dark:selection:bg-palevioletred"
      style={{
        opacity: '0.9',
        backgroundImage:
          'radial-gradient(#33333390 0.75px, rgba(0,0,0,0) 0.95px)',
        backgroundSize: '19px 19px',
        backgroundRepeat: 'repeat',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
      }}
    >
      <Meta />
      {alert.enabled && !value?.dismissed && (
        <Alert header={alert.header} body={alert.body} setValue={setValue} />
      )}
      <div className="flex min-h-screen w-full flex-col px-4 md:max-w-11xl md:overflow-x-visible md:px-8 lg:py-4 items-center justify-center">
        <Navbar />
        <main className="relative flex-1 items-center flex flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
