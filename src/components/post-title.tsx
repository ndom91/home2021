import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="my-12 text-center dark:text-gray-200 text-6xl font-bold tracking-tighter leading-tight md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  )
}

export default PostTitle
