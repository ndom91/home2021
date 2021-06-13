import Link from "next/link"
import Avatar from "@/components/avatar"
import DateFormatter from "@/components/date-formatter"
import CoverImage from "@/components/cover-image"

type Props = {
  title: string
  cover: {
    image: string
    height: number
    width: number
  }
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({ title, cover, date, excerpt, slug }: Props) => {
  return (
    <section>
      <div className="mask-bottom mb-8 h-96 border-10 border-b-0 dark:border-palevioletred border-pink-300 overflow-hidden md:mb-16">
        <CoverImage title={title} cover={cover} slug={slug} />
      </div>
      <div className="mb-20 md:grid md:gap-x-16 md:grid-cols-2 md:mb-28 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="dark:text-gray-200">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
