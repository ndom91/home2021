import Link from "next/link"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Avatar from "@/components/avatar"
import DateFormatter from "@/components/date-formatter"
import CoverImage from "@/components/cover-image"

type Props = {
  title: string
  cover: {
    imageFile: string
  }
  date: string
  slug: string
  time: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

const HeroPost = ({ title, cover, date, slug, time }: Props) => {
  return (
    <section className="opacity-0 animate-fade_in">
      <div className="h-auto mb-8 overflow-hidden mask-bottom md:mb-16 md:h-96">
        <ParallaxProvider>
          <Parallax y={[10, -10]}>
            <CoverImage title={title} cover={cover} slug={slug} />
          </Parallax>
        </ParallaxProvider>
      </div>
      <div className="mb-10 sm:grid md:gap-x-16 sm:grid-cols-5 md:mb-16 lg:gap-x-8">
        <div className="col-span-4">
          <h3 className="mb-2 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="font-extralight font-sans dark:text-gray-100 first-letter:text-4xl outline-none hover:outline-none focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white focus:dark:ring-offset-gray-500 focus:ring-pink-300 focus:dark:ring-palevioletred rounded-sm">
                {title}
              </a>
            </Link>
          </h3>
          <div className="flex mb-4 space-x-4 text-lg font-light md:justify-start font-mono">
            <DateFormatter dateString={date} />
            <span className="dark:text-gray-300">{time.text}</span>
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
