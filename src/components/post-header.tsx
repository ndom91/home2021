import Avatar from "@/components/avatar"
import DateFormatter from "@/components/date-formatter"
import Image from "next/image"

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

const PostHeader = ({ post }: Props) => {
  const { title, date, cover, time } = post
  return (
    <div className="flex flex-col gap-16 w-full">
      <h1 className="font-bold tracking-tighter leading-tight text-center md:text-7xl md:leading-none md:text-left lg:text-8xl dark:text-gray-100 text-[3.25rem] text-balance">
        {title}
      </h1>
      {cover && (
        <Image
          src={`/assets/blog/${cover.imageFile}`}
          alt={`Cover Image for ${title}`}
          className="rounded-md"
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      )}
      <div className="flex justify-between mx-auto w-full max-w-4xl">
        <Avatar />
        <div className="text-lg text-right">
          <DateFormatter dateString={date} />
          <p className="text-gray-700 dark:text-gray-300">{time.text}</p>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
