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
    <section className="p-8 mx-auto w-full max-w-7xl bg-white rounded-2xl shadow-xl opacity-0 md:p-16 dark:bg-gray-700 animate-fade_in">
      <div className="overflow-hidden mb-8 h-auto rounded-t-lg md:mb-16 mask-bottom-strong md:h-[28rem]">
        <ParallaxProvider>
          <Parallax translateY={[0, -10]}>
            <CoverImage post={post} />
          </Parallax>
        </ParallaxProvider>
      </div>
      <div className="sm:grid sm:grid-cols-5 md:gap-x-16 lg:gap-x-8">
        <div className="col-span-4">
          <h3 className="mb-2 text-3xl leading-tight lg:text-4xl">
            <Link
              href={!url ? `/posts/${slug}` : url}
              target={url ? "_blank" : "_self"}
              className="font-sans font-extralight rounded-sm outline-none dark:text-gray-100 hover:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus:dark:ring-palevioletred focus:dark:ring-offset-gray-500"
            >
              {title}
            </Link>
          </h3>
          <div className="flex mb-4 space-x-4 font-semibold md:justify-start text-md">
            <DateFormatter dateString={date} />
            <span className="text-gray-400 dark:text-gray-300">{time.text}</span>
          </div>
        </div>
        <div className="flex justify-start sm:justify-end">
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
