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
    <div className="relative flex-col w-full max-w-full bg-white rounded-2xl md:inline-flex md:my-4 md:max-w-md dark:bg-gray-700 drop-shadow-lg">
      <div className="z-20 p-10">
        <div className="overflow-hidden z-20 mb-6 h-auto rounded-t-lg md:mb-6 mask-bottom-strong">
          <ParallaxProvider>
            <Parallax translateY={[0, -10]}>
              <CoverImage post={post} />
            </Parallax>
          </ParallaxProvider>
        </div>
        <div className="flex relative z-20 flex-col justify-between w-full">
          <Link
            href={!url ? `/posts/${slug}` : url}
            target={url ? "_blank" : "_self"}
            className="text-lg font-extralight text-gray-600 rounded-sm transition-colors duration-300 outline-none md:text-xl dark:text-gray-100 hover:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white focus:outline-none hover:text-palevioletred focus:dark:ring-palevioletred focus:dark:ring-offset-gray-500"
          >
            {title}
          </Link>
          <div className="flex flex-col items-start space-y-1 text-sm font-light md:text-base">
            <span className="text-medium">
              <DateFormatter dateString={date} />
            </span>
            <span className="text-gray-400 dark:text-gray-200">{time.text}</span>
          </div>
        </div>
        <div
          className="flex z-20 mt-4 w-full max-w-full font-light text-gray-600 dark:text-gray-200 prose-md prose prose-pink card-description dark:prose-dark"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="flex relative z-20 mt-6 align-middle">
          <div className="flex overflow-hidden relative flex-wrap justify-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="py-2 px-4 my-2 mr-2 text-sm font-medium whitespace-nowrap bg-gray-100 rounded-full dark:text-pink-800 dark:bg-pink-200 font-block text-palevioletred"
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
