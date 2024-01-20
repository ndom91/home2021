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
      className="inline-block relative w-full rounded-lg aspect-video"
      tabIndex={-1}
    >
      <Image
        src={`/assets/blog/${cover.imageFile}`}
        alt={`Cover Image for ${title}`}
        className="object-cover object-top"
        priority
        fill
        sizes={"100%"}
      />
    </Link>
  )
}

export default CoverImage
