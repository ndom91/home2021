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
    <Link
      as={slug ? `/posts/${slug}` : "#"}
      href="/posts/[slug]"
      aria-label={title}
      className="inline-block relative w-full bg-pink-300 rounded-md aspect-video"
      tabIndex={-1}
    >
      <Image
        src={`/assets/blog/${cover.imageFile}`}
        alt={`Cover Image for ${title}`}
        className="object-contain"
        priority
        fill
        sizes={"100%"}
      />
    </Link>
  )
}

export default CoverImage
