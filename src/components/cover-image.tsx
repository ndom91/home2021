import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

type Props = {
  title: string
  cover: {
    imageFile: string
  }
  slug?: string
}

const CoverImage = ({ title, cover = { imageFile: "" }, slug }: Props) => {
  const { imageFile } = cover

  const [imageImport, setImage] = useState("")
  const loadImage = (imgur: string) => {
    if (!imgur) {
      return false
    }
    import(`../../public/assets/blog/${imgur}`).then((image) => {
      setImage(image)
    })
  }

  useEffect(() => {
    loadImage(imageFile)
  }, [imageFile])

  const imageComponent = !imageImport ? (
    <div className="relative my-4 py-4 text-center text-gray-200 dark:text-gray-700 font-mono font-thin">
      Loading..
    </div>
  ) : (
    // @ts-ignore
    <Image
      src={imageImport}
      alt={`Cover Image for ${title}`}
      quality="100"
      layout="responsive"
      objectFit="fill"
      placeholder="blur"
      className={
        slug
          ? "shadow-small hover:shadow-medium transition-shadow duration-200"
          : "shadow-small"
      }
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="" aria-label={title}>
            {imageComponent}
          </a>
        </Link>
      ) : (
        imageComponent
      )}
    </div>
  )
}

export default CoverImage
