import { useState, useEffect } from "react"
import DateFormatter from "@/components/date-formatter"
import Image from "next/image"
import Link from "next/link"

interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

interface StaticRequire {
  default: StaticImageData
}

type StaticImport = StaticRequire | StaticImageData

type Props = {
  post: {
    title: string
    cover: {
      imageFile: string
    }
    date: string
    excerpt: string
    slug: string
    category: string
    tags: string[]
  }
}

const PostCard = ({ post }: Props) => {
  const {
    title,
    cover = { imageFile: "" },
    date,
    excerpt,
    slug,
    category,
    tags,
  } = post
  const { imageFile } = cover
  const [imageImport, setImage] = useState<StaticImport>()
  const loadImage = (imgur: string) => {
    if (!imgur) {
      return false
    }
    import(`../../public/assets/blog/${imgur}`).then((image) => {
      setImage(image)
    })
  }
  loadImage(imageFile)

  return (
    <div className="mx-8">
      <div className="relative m-4">
        <div className="relative z-10 flex bg-gray-50 dark:bg-warmGray-800 rounded-xl hover:shadow-lg transition duration-500">
          <Link href={`/posts/${slug ? slug : ""}`}>
            <a
              // style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 80%)" }}
              className="z-10 w-44 h-full bg-gray-200 dark:bg-gray-600 rounded-l-xl hover:cursor-pointer"
            >
              {imageImport && (
                <Image
                  src={imageImport}
                  alt={`${title} Image`}
                  quality="100"
                  layout="responsive"
                  placeholder="blur"
                  className="rounded-l-xl object-bottom"
                />
              )}
            </a>
          </Link>

          <div className="flex flex-1 flex-col">
            <div className="relative z-10 flex justify-between p-6 pb-0 w-full">
              <Link href={`/posts/${slug ? slug : ""}`}>
                <a>
                  <div className="dark:text-gray-200 text-gray-600 text-lg font-medium capitalize md:text-xl">
                    {title}
                  </div>
                </a>
              </Link>
              <div className="flex">
                <span className="mx-4 text-gray-300 dark:text-gray-600 font-light">
                  {category}
                </span>
                <span className="font-light">
                  <DateFormatter dateString={date} />
                </span>
              </div>
            </div>
            <div
              className="prose prose-sm flex p-6 w-full max-w-full dark:text-gray-300 text-gray-600"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </div>

          {/*  TAGS
          <div className="relative z-10 flex align-middle px-6 py-4">
            <div className="relative z-10 flex justify-start overflow-hidden">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 my-auto px-2 py-1 text-gray-400 whitespace-nowrap  text-xs bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div> 
          </div> */}
        </div>
        {/* <div className="pattern-dots-md absolute z-0 -bottom-8 -left-8 w-56 h-52 text-palevioletred" /> */}
      </div>
    </div>
  )
}

export default PostCard
