import DateFormatter from "@/components/date-formatter"
import Link from "next/link"

type Props = {
  post: {
    title: string
    date: string
    excerpt: string
    slug: string
    category: string
    tags: string[]
    time: {
      text: string
      minutes: number
      time: number
      words: number
    }
  }
}

const PostCard = ({ post }: Props) => {
  const { title, date, excerpt, slug, tags, time } = post

  return (
    <div className="flex-col md:inline-flex w-full md:my-16">
      <div className="relative flex flex-col justify-between w-full md:flex-row ">
        <Link href={`/posts/${slug ? slug : ""}`}>
          <a>
            <div className="text-4xl font-medium text-gray-600 capitalize transition-colors duration-300 dark:text-gray-100 hover:text-palevioletred">
              {title}
            </div>
          </a>
        </Link>
        <div className="flex flex-col text-sm text-left md:text-right md:text-base">
          <span className="text-medium">
            <DateFormatter dateString={date} />
          </span>
          <span className="text-gray-400 dark:text-gray-200 font-medium">
            {time.text}
          </span>
        </div>
      </div>
      <div
        className="flex w-full max-w-full mt-4 mb-4 prose-md prose font-light text-gray-600 dark:text-gray-200 prose-pink dark:prose-dark"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div className="relative flex align-middle">
        <div className="relative flex justify-start overflow-hidden">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 my-auto mr-2 text-sm text-gray-400 bg-gray-200 rounded-full whitespace-nowrap dark:bg-gray-800 dark:text-palevioletred"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostCard
