import Link from "next/link"
import Image from "next/image"

type Props = {
  title: string
  cover: {
    image: string
    width: number
    height: number
  }
  slug?: string
}

const CoverImage = ({
  title,
  cover = { image: "", height: 0, width: 0 },
  slug,
}: Props) => {
  const { image, width, height } = cover
  const img = (
    <Image
      src={`/${image}`}
      alt={`Cover Image for ${title}`}
      height={height}
      width={width}
      quality="100"
      layout="responsive"
      objectFit="cover"
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
          <a aria-label={title}>{img}</a>
        </Link>
      ) : (
        img
      )}
    </div>
  )
}

export default CoverImage
