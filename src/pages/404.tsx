import Layout from "@/components/layout"
import Image from "next/image"

const Error404 = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center mt-12 space-y-12 w-full dark:text-white">
        <Image
          src="/assets/travolta.webp"
          height="500"
          width="500"
          alt="Travola Lost"
          className="flex-1 w-auto h-auto brightness-125 contrast-125 grayscale filter"
        />
        <p className="max-w-xs text-xl font-light text-gray-800 md:max-w-max dark:text-gray-100">
          Whoops, it looks like the page you were looking for doesn&apos;t exist!
        </p>
        <a
          href="/"
          className="inline-flex justify-center items-center py-2 px-4 w-80 text-lg text-gray-800 bg-white rounded-md border border-gray-300 shadow-sm transition-all duration-300 ease-in-out outline-none dark:text-gray-100 hover:bg-gray-50 hover:ring-4 hover:ring-pink-300 focus:ring-4 focus:ring-pink-300 focus:shadow-none focus:outline-none whitespace-no-wrap dark:bg-palevioletred dark:border-palevioletred dark:hover:ring-palevioletred dark:hover:ring-opacity-20 dark:focus:ring-palevioletred dark:focus:ring-opacity-20"
        >
          Back Home
        </a>
      </div>
    </Layout>
  )
}

export default Error404
