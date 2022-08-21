import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="my-12 mb-20 text-center text-[3.25rem] font-light font-bold leading-tight tracking-tighter dark:text-gray-100 md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  )
}

export default PostTitle
