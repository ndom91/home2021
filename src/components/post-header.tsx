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
      <div className="hidden md:block md:mb-12">
        <Avatar />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} cover={cover} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="block mb-6 md:hidden">
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
