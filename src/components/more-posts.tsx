import PostCard from "@/components/post-card"
import { type Post } from "@/types"

type Props = {
  posts: Post[]
}

const MorePosts = ({ posts }: Props) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 dark:text-gray-100">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  )
}

export default MorePosts
