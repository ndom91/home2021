import Link from "next/link"
import Image from "next/image"

type Props = {
  post: {
    title: string
    cover: {
      imageFile: string
    }
    date: string
    slug: string
    url?: string
    time: {
      text: string
      minutes: number
      time: number
      words: number
    }
  }
}

const CoverImage = ({ post }: Props) => {
  const { title, cover, slug, url } = post
  return (
    <Link
      href={!url ? `/posts/${slug}` : url}
      target={url ? "_blank" : "_self"}
      aria-label={title}
      className="inline-block relative w-full rounded-lg aspect-video"
      tabIndex={-1}
    >
      <Image
        src={`/assets/blog/${cover.imageFile}`}
        alt={`Cover Image for ${title}`}
        priority
        fill
        sizes={"100%"}
      />
    </Link>
  )
}

export default CoverImage
