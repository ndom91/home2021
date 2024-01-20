import Link from "next/link"
import Image from "next/image"

type Props = {
  title: string
  cover: {
    imageFile: string
  }
  slug?: string
}

const CoverImage = ({ title, cover, slug }: Props) => {
  return (
    <div className="sm:mx-0">
      <Link
        as={slug ? `/posts/${slug}` : "#"}
        href="/posts/[slug]"
        aria-label={title}
        className="bg-pink-300"
        tabIndex={-1}
      >
        <Image
          src={`/assets/blog/${cover.imageFile}`}
          alt={`Cover Image for ${title}`}
          priority
          layout="responsive"
          width={100}
          height={100}
          objectFit="fill"
          className={
            slug
              ? "rounded-lg shadow-sm transition-shadow duration-200 hover:shadow-md"
              : "rounded-lg bg-blend-overlay shadow-sm"
          }
        />
      </Link>
    </div>
  )
}

export default CoverImage
