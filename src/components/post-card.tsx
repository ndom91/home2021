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
        <div className="relative z-10 flex flex-col bg-gray-100 dark:bg-gray-800 rounded-xl hover:shadow-2xl shadow-md transition duration-500">
          <Link href={`/posts/${slug ? slug : ""}`}>
            <a
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 80%)" }}
              className="z-10 mb-2 w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-t-xl hover:cursor-pointer"
            >
              {imageImport && (
                <Image
                  src={imageImport}
                  alt={`${title} Image`}
                  quality="100"
                  layout="responsive"
                  placeholder="blur"
                  className="rounded-t-xl"
                />
              )}
            </a>
          </Link>

          <div className="relative z-10 p-6 pb-2 overflow-hidden overflow-y-visible">
            <Link href={`/posts/${slug ? slug : ""}`}>
              <a>
                <div className="dark:text-gray-200 text-gray-600 font-sans text-lg font-thin capitalize md:text-xl">
                  {title}
                </div>
              </a>
            </Link>
            <div className="flex pt-1 md:pt-4">
              <span className="text-md text-gray-600 font-sans font-medium">
                <DateFormatter dateString={date} />
              </span>
              <span className="text-md mx-4 text-gray-400 font-sans">
                {category}
              </span>
            </div>
          </div>

          <div className="relative z-10 flex align-middle px-6 py-4">
            {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div> */}

            <div className="relative z-10 flex justify-start overflow-hidden">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 my-auto px-2 py-1 text-gray-400 whitespace-nowrap font-sans text-xs bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pattern-dots-md absolute z-0 -bottom-8 -left-8 w-56 h-52 text-palevioletred" />
      </div>
    </div>
  )
}

export default PostCard
