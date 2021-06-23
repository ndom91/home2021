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
    <section className="opacity-0 animate-fade-in">
      <div className="h-auto mb-8 overflow-hidden mask-bottom md:mb-16 md:h-96">
        <CoverImage title={title} cover={cover} slug={slug} />
      </div>
      <div className="mb-10 md:grid md:gap-x-16 md:grid-cols-3 md:mb-16 lg:gap-x-8">
        <h3 className="col-span-2 mb-4 text-4xl leading-tight lg:text-6xl">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="font-bold dark:text-gray-200 first-letter:text-4xl">
              {title}
            </a>
          </Link>
        </h3>
        <div>
          <div className="flex my-4 space-x-4 text-lg font-light md:justify-end">
            <DateFormatter dateString={date} />
            <span className="dark:text-gray-400">{time.text}</span>
          </div>
          <div className="flex justify-start md:justify-end">
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
