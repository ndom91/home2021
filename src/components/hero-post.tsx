import Link from "next/link"
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
    <section>
      <div className="h-auto mb-8 overflow-hidden border-b-0 border-pink-300 mask-bottom border-10 dark:border-palevioletred md:mb-16 md:h-96">
        <CoverImage title={title} cover={cover} slug={slug} />
      </div>
      <div className="mb-10 md:grid md:gap-x-16 md:grid-cols-2 md:mb-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="font-bold dark:text-gray-200 first-letter:text-4xl">
                {title}
              </a>
            </Link>
          </h3>
          <div className="flex mb-4 space-x-4 text-lg font-light md:mb-0">
            <DateFormatter dateString={date} />
            <span className="dark:text-gray-400">{time.text}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
