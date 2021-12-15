import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-light my-12 text-[3.25rem] font-bold leading-tight tracking-tighter text-center dark:text-gray-100 md:text-left md:text-7xl md:leading-none lg:text-8xl mb-24">
      {children}
    </h1>
  )
}

export default PostTitle
