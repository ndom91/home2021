type Props = {
  content: string
}

const PostBody = (children: any) => {
  console.log(children)
  return (
    <div className="max-w-2xl mx-auto prose-sm prose dark:prose-dark prose-pink md:prose-lg dark:text-gray-200">
      {children}
    </div>
  )
}

export default PostBody
