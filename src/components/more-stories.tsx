// import PostPreview from "@/components/post-preview"
import Post from "../types/post"
import PostCard from "@/components/post-card"

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="mt-64">
      <h2 className="mb-8 dark:text-gray-200 text-6xl font-bold tracking-tighter leading-tight md:text-7xl">
        More Stories
      </h2>
      <div className="grid gap-x-4 gap-y-10 grid-cols-1 mb-32 dark:text-gray-200 sm:grid-cols-2 lg:gap-y-10 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
