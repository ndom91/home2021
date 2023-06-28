import Layout from '@/components/layout'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'

const FourOhFour = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="mt-12 flex w-full flex-col items-center justify-center space-y-12 dark:text-white">
        <Image
          src="/assets/travolta.webp"
          height="500"
          width="500"
          alt="Travola Lost"
          className="h-auto w-auto flex-1 brightness-125 contrast-125 grayscale filter"
        />
        <p className="max-w-xs text-xl font-light text-gray-800 dark:text-gray-100 md:max-w-max">
          Whoops, it looks like the page you were looking for doesn&apos;t
          exist!
        </p>
        <button
          onClick={() => router.back()}
          className="whitespace-no-wrap inline-flex w-80 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-lg font-light text-gray-800 shadow-sm outline-none transition-all duration-300 ease-in-out hover:bg-gray-50 hover:ring-4 hover:ring-pink-300 focus:shadow-none focus:outline-none focus:ring-4 focus:ring-pink-300 dark:border-palevioletred dark:bg-gray-500 dark:text-gray-100 dark:hover:ring-palevioletred dark:hover:ring-opacity-20 dark:focus:ring-palevioletred dark:focus:ring-opacity-20"
        >
          Back
        </button>
      </div>
    </Layout>
  )
}

export default FourOhFour
