import Avatar from "@/components/avatar"
import DateFormatter from "@/components/date-formatter"
import CoverImage from "@/components/cover-image"
import PostTitle from "@/components/post-title"

type Props = {
  title: string
  cover: {
    imageFile: string
  }
  date: string
  time: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

const PostHeader = ({ title, cover, date, time }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {cover && (
        <div className="sm:mx-0">
          <CoverImage title={title} cover={cover} />
        </div>
      )}
      <div className="flex justify-between max-w-2xl mx-auto my-8 md:mt-16">
        <div className="block mb-6">
          <Avatar />
        </div>
        <div className="mb-6 text-lg">
          <p className="text-gray-700 dark:text-gray-300">{time.text}</p>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
