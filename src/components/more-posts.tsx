import Post from "../types/post"
import PostCard from "@/components/post-card"

type Props = {
  posts: Post[]
}

const MorePosts = ({ posts }: Props) => {
  return (
    <section className="mt-24 md:px-0">
      <h2 className="mx-auto mb-8 max-w-7xl text-4xl font-bold tracking-tighter leading-tight md:mb-24 md:text-5xl dark:text-gray-100">
        More Posts
      </h2>
      <div className="flex overflow-visible flex-wrap gap-x-4 gap-y-20 justify-around items-start mb-24 sm:gap-x-4 md:gap-x-6 lg:gap-x-10 lg:gap-y-14 dark:text-gray-100">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default MorePosts
