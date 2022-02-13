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
  const { title, date, excerpt, slug, tags, time, cover } = post

  return (
    <div className="relative flex-col md:inline-flex w-full md:my-4">
      <div className="glass-content p-10 z-20">
        <div className="h-auto mb-8 overflow-hidden mask-bottom-strong md:mb-12 md:h-64 rounded-t-xl z-20">
          <ParallaxProvider>
            <Parallax y={[0, -10]}>
              <CoverImage title={title} cover={cover} slug={slug} />
            </Parallax>
          </ParallaxProvider>
        </div>
        <div className="relative flex flex-col justify-between w-full md:flex-row z-20">
          <Link href={`/posts/${slug ? slug : ""}`}>
            <a className="text-4xl font-extralight text-gray-600 capitalize transition-colors duration-300 dark:text-gray-100 hover:text-palevioletred outline-none hover:outline-none focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white focus:dark:ring-offset-gray-500 focus:ring-pink-300 focus:dark:ring-palevioletred rounded-sm">
              {title}
            </a>
          </Link>
          <div className="flex flex-col text-sm text-left md:text-right md:text-base font-light font-mono">
            <span className="text-medium">
              <DateFormatter dateString={date} />
            </span>
            <span className="text-gray-400 dark:text-gray-200">
              {time.text}
            </span>
          </div>
        </div>
        <div
          className="flex w-full max-w-full mt-4 prose-md prose font-light text-gray-600 dark:text-gray-200 prose-pink dark:prose-dark z-20"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="relative flex align-middle mt-6 z-20">
          <div className="relative flex justify-start overflow-hidden">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 my-auto mr-2 text-sm text-gray-400 bg-gray-200 rounded-full whitespace-nowrap dark:bg-gray-800 dark:text-palevioletred font-mono font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full glass-card z-10" />
    </div>
  )
}

export default PostCard
