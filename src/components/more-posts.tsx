import PostCard from "@/components/post-card"
import { type Post } from "@/types/post"

type Props = {
  posts: Post[]
}

const MorePosts = ({ posts }: Props) => {
  return (
    <section className="mt-24 md:px-0">
      <h2 className="mx-auto mb-8 max-w-7xl text-4xl font-bold tracking-tighter leading-tight md:mb-24 md:text-5xl dark:text-gray-100">
        More Posts
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 dark:text-gray-100">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default MorePosts
