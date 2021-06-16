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
}

const PostHeader = ({ title, cover, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} cover={cover} />
      </div>
      <div className="flex justify-between mx-auto max-w-2xl">
        <div className="block mb-6">
          <Avatar />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
