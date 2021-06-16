import markdownStyles from "./markdown-styles.module.css"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="prose dark:prose-dark prose-sm prose-pink md:prose-lg mx-auto max-w-2xl dark:text-gray-200">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
