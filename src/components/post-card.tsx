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
    time: {
      text: string
      minutes: number
      time: number
      words: number
    }
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
    time,
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
        <div className="relative flex transition duration-500 rounded-xl hover:shadow-sm-smooth">
          <Link href={`/posts/${slug ? slug : ""}`}>
            <a className="bg-gray-200 w-44 dark:bg-gray-600 rounded-l-xl hover:cursor-pointer post-card-image-wrapper">
              {imageImport && (
                <Image
                  src={imageImport}
                  alt={`${title} Cover Image`}
                  quality="100"
                  layout="responsive"
                  placeholder="blur"
                  objectFit="contain"
                  className="rounded-l-xl"
                />
              )}
            </a>
          </Link>

          <div className="flex flex-col flex-1 p-10">
            <div className="relative flex justify-between w-full ">
              <Link href={`/posts/${slug ? slug : ""}`}>
                <a>
                  <div className="text-lg font-medium text-gray-600 capitalize transition-colors duration-300 dark:text-gray-200 md:text-xl hover:text-palevioletred">
                    {title}
                  </div>
                </a>
              </Link>
              <div className="flex">
                <span className="mx-4 font-light text-gray-400 dark:text-gray-600 min-w-max">
                  {time.text}
                </span>
                <span className="text-medium min-w-max">
                  <DateFormatter dateString={date} />
                </span>
              </div>
            </div>
            <div
              className="flex w-full max-w-full mb-4 prose-sm prose text-gray-600 dark:text-gray-300 prose-pink"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <div className="relative flex align-middle">
              <div className="relative flex justify-start overflow-hidden">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 my-auto mr-2 text-xs text-gray-400 bg-gray-200 rounded-full whitespace-nowrap dark:bg-gray-800 dark:text-palevioletred"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
