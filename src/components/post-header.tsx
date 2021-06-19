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
        <div className="border-10 dark:border-palevioletred border-pink-300 sm:mx-0">
          <CoverImage title={title} cover={cover} />
        </div>
      )}
      <div className="flex justify-between mb-8 mx-auto max-w-2xl md:mt-16">
        <div className="block mb-6">
          <Avatar />
        </div>
        <div className="mb-6 text-lg">
          <p>{time.text}</p>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
