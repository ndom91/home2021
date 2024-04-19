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
      <div className="flex flex-col gap-3 p-10 bg-white rounded-xl shadow-sm dark:bg-gray-700">
        <div className="overflow-hidden rounded-t-lg mask-bottom-strong">
          <ParallaxProvider>
            <Parallax translateY={[0, -10]}>
              <CoverImage post={post} />
            </Parallax>
          </ParallaxProvider>
        </div>
        <Link
          href={!url ? `/posts/${slug}` : url}
          target={url ? "_blank" : "_self"}
          className="text-lg font-extralight text-gray-600 rounded-sm transition-colors duration-300 outline-none md:text-xl dark:text-gray-100 hover:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white focus:outline-none text-balance line-clamp-2 hover:text-palevioletred focus:dark:ring-palevioletred focus:dark:ring-offset-gray-500"
        >
          {title}
        </Link>
        <div className="flex justify-between text-sm font-semibold md:text-base">
          <span className="text-medium">
            <DateFormatter dateString={date} />
          </span>
          <span className="text-gray-400 dark:text-gray-200">{time.text}</span>
        </div>
        {excerpt ? (
          <div
            className="flex w-full max-w-full font-light text-gray-600 dark:text-gray-200 prose-md prose prose-pink card-description dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        ) : null}
        <div className="flex relative items-center">
          <div className="flex overflow-hidden relative flex-wrap justify-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="py-1 px-2 my-1 mr-2 text-xs font-medium whitespace-nowrap bg-gray-100 rounded-full dark:text-pink-800 dark:bg-pink-200 font-block text-palevioletred"
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
