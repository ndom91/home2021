import DateFormatter from "@/components/date-formatter"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import CoverImage from "@/components/cover-image"
import Link from "next/link"

type Props = {
  post: {
    title: string
    date: string
    excerpt: string
    slug: string
    category: string
    tags: string[]
    url?: string
    cover: {
      imageFile: string
    }
    time: {
      text: string
      minutes: number
      time: number
      words: number
    }
  }
}

const PostCard = ({ post }: Props) => {
  const { title, date, excerpt, slug, tags, time, url = "" } = post

  return (
    <div className="flex relative flex-col w-full md:my-4 md:max-w-md">
      <div className="flex flex-col gap-3 p-8 bg-gray-50 rounded-xl shadow-sm dark:bg-gray-700">
        <div className="overflow-hidden h-40 rounded-t-lg mask-bottom-strong">
          <ParallaxProvider>
            <Parallax translateY={[0, -10]}>
              <CoverImage post={post} />
            </Parallax>
          </ParallaxProvider>
          {url?.includes("checklyhq.com") ? (
            <div
              className="absolute top-10 right-10 z-20 p-2.5 bg-gray-100 rounded-full dark:bg-gray-700"
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
        <div className="flex flex-col gap-1">
          <Link
            href={!url ? `/posts/${slug}` : url}
            target={url ? "_blank" : "_self"}
            className="text-3xl font-light text-gray-600 rounded-sm transition-colors duration-300 outline-none md:text-xl dark:text-gray-100 hover:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white focus:outline-none text-balance line-clamp-2 hover:text-palevioletred focus:dark:ring-palevioletred focus:dark:ring-offset-gray-500"
          >
            {title}
          </Link>
          <div className="flex justify-between">
            <span className="">
              <DateFormatter dateString={date} />
            </span>
            <span className="text-gray-400 dark:text-gray-200">{time.text}</span>
          </div>
        </div>
        {excerpt ? (
          <div
            className="flex w-full max-w-full text-gray-400 dark:text-gray-300 prose-md prose prose-pink card-description dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        ) : null}
        <div className="flex relative items-center">
          <div className="flex overflow-hidden relative flex-wrap justify-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="py-1 px-2 my-1 mr-2 text-xs font-medium whitespace-nowrap bg-gray-100 rounded-full dark:text-gray-600 font-block text-palevioletred dark:bg-pink-200/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
