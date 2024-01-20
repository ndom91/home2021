import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  cover: {
    imageFile: string
  }
  slug?: string
}

const CoverImage = ({ title, cover = { imageFile: '' }, slug }: Props) => {
  const { imageFile } = cover

  const [imageImport, setImage] = useState('')
  const loadImage = (imgur: string) => {
    if (!imgur) {
      return false
    }
    import(`../../public/assets/blog/${imgur}`).then((image) => {
      setImage(image)
    })
  }
  loadImage(imageFile)

  const imageComponent = !imageImport ? (
    <div className="relative py-4 my-4 font-mono font-extralight text-center text-gray-200 dark:text-gray-700">
      Loading..
    </div>
  ) : (
    <Image
      src={imageImport}
      alt={`Cover Image for ${title}`}
      priority
      quality="100"
      layout="responsive"
      objectFit="fill"
      placeholder="blur"
      className={
        slug
          ? 'rounded-lg shadow-sm transition-shadow duration-200 hover:shadow-md'
          : 'rounded-lg bg-blend-overlay shadow-sm'
      }
    />
  )

  return (
    <div className="sm:mx-0">
      {!imageFile.includes('.gif') ? (
        <Link
          as={slug ? `/posts/${slug}` : '#'}
          href="/posts/[slug]"
          aria-label={title}
          className="bg-pink-300"
          tabIndex={-1}
        >
          {imageComponent}
        </Link>
      ) : (
        <Link
          as={slug ? `/posts/${slug}` : '#'}
          href="/posts/[slug]"
          aria-label={title}
          className="bg-pink-300"
          tabIndex={-1}
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img
            alt={slug}
            src={`/assets/blog/${imageFile}`}
            className="mx-auto"
            loading="eager"
          />
        </Link>
      )}
    </div>
  )
}

export default CoverImage
