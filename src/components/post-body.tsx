type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto prose-sm prose dark:prose-dark prose-pink md:prose-lg dark:text-gray-200">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostBody
