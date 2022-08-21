import Avatar from '@/components/avatar'
import DateFormatter from '@/components/date-formatter'
import CoverImage from '@/components/cover-image'
import PostTitle from '@/components/post-title'

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
        <div className="mb-16 sm:mx-0">
          <CoverImage title={title} cover={cover} />
        </div>
      )}
      <div className="mx-auto my-8 flex max-w-4xl justify-between md:mt-16">
        <div className="mb-6 block">
          <Avatar />
        </div>
        <div className="mb-16 text-right font-mono text-lg font-thin">
          <DateFormatter dateString={date} />
          <p className="text-gray-700 dark:text-gray-300">{time.text}</p>
        </div>
      </div>
    </>
  )
}

export default PostHeader
