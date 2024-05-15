import Link from "next/link"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Avatar from "@/components/avatar"
import DateFormatter from "@/components/date-formatter"
import CoverImage from "@/components/cover-image"

type Props = {
  post: {
    title: string
    cover: {
      imageFile: string
    }
    date: string
    slug: string
    url?: string
    time: {
      text: string
      minutes: number
      time: number
      words: number
    }
  }
}

const HeroPost = ({ post }: Props) => {
  const { title, date, slug, time, url } = post
  return (
    <section className="relative p-8 mx-auto w-full max-w-7xl bg-gray-50 rounded-2xl shadow-sm opacity-0 md:p-10 dark:bg-gray-700 animate-fade_in">
      <div className="overflow-hidden mb-4 h-auto rounded-t-lg md:mb-8 mask-bottom-strong md:h-[24rem]">
        <ParallaxProvider>
          <Parallax translateY={[10, -20]}>
            <CoverImage post={post} />
          </Parallax>
        </ParallaxProvider>
        {url?.includes("checklyhq.com") ? (
          <div
            className="absolute top-12 right-12 z-20 p-2.5 bg-gray-100 rounded-full dark:bg-gray-700"
            title="External"
          >
            <svg
              className="text-gray-500 dark:text-white size-5"
              data-comment="external icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <polyline
                points="216 104 215.99 40.01 152 40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="136"
                y1="120"
                x2="216"
                y2="40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
        ) : null}
      </div>
      <div className="sm:grid sm:grid-cols-4 md:gap-x-16 lg:gap-x-8">
        <div className="flex flex-col col-span-3 gap-2">
          <h3 className="text-3xl leading-tight lg:text-4xl">
            <Link
              href={!url ? `/posts/${slug}` : url}
              target={url ? "_blank" : "_self"}
              className="font-sans font-extralight rounded-sm outline-none dark:text-gray-100 hover:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus:dark:ring-palevioletred focus:dark:ring-offset-gray-500"
            >
              {title}
            </Link>
          </h3>
          <div className="flex gap-4 md:justify-start text-md">
            <DateFormatter dateString={date} />
            <span className="text-gray-400 dark:text-gray-300">{time.text}</span>
          </div>
        </div>
        <div className="hidden justify-end sm:flex">
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
