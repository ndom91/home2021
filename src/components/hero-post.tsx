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
  excerpt: string
  slug: string
}

const HeroPost = ({ title, cover, date, excerpt, slug }: Props) => {
  return (
    <section>
      <div className="mask-bottom mb-8 h-auto border-10 border-b-0 dark:border-palevioletred border-pink-300 overflow-hidden md:mb-16 md:h-96">
        <CoverImage title={title} cover={cover} slug={slug} />
      </div>
      <div className="mb-10 md:grid md:gap-x-16 md:grid-cols-2 md:mb-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="dark:text-gray-200 font-bold">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg font-thin md:mb-0">
            <DateFormatter dateString={date} />
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
