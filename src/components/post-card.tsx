import DateFormatter from '@/components/date-formatter'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import CoverImage from '@/components/cover-image'
import Link from 'next/link'

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
    <div className="relative w-full max-w-full flex-col rounded-2xl bg-white drop-shadow-lg dark:bg-gray-700 md:my-4 md:inline-flex md:max-w-md">
      <div className="z-20 p-10">
        <div className="mask-bottom-strong z-20 mb-6 h-auto overflow-hidden rounded-t-lg md:mb-6">
          <ParallaxProvider>
            <Parallax translateY={[0, -10]}>
              <CoverImage title={title} cover={cover} slug={slug} />
            </Parallax>
          </ParallaxProvider>
        </div>
        <div className="relative z-20 flex w-full flex-col justify-between">
          <Link
            href={`/posts/${slug ? slug : ''}`}
            className="rounded-sm text-2xl font-extralight text-gray-600 outline-none transition-colors duration-300 hover:text-palevioletred hover:outline-none focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-100 focus:dark:ring-palevioletred focus:dark:ring-offset-gray-500 md:text-2xl"
          >
            {title}
          </Link>
          <div className="flex flex-col font-block text-sm font-light items-start md:text-base space-y-1">
            <span className="text-medium">
              <DateFormatter dateString={date} />
            </span>
            <span className="text-gray-400 dark:text-gray-200">
              {time.text}
            </span>
          </div>
        </div>
        <div
          className="prose-md prose prose-pink z-20 mt-4 flex w-full max-w-full font-light text-gray-600 dark:prose-dark dark:text-gray-200 line-clamp-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="relative z-20 mt-6 flex align-middle">
          <div className="relative flex flex-wrap justify-start overflow-hidden">
            {tags.map((tag) => (
              <span
                key={tag}
                className="my-2 mr-2 whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 font-block text-sm font-medium text-palevioletred dark:bg-pink-200 dark:text-palevioletred"
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
