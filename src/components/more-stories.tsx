// import PostPreview from "@/components/post-preview"
import Post from "../types/post"
import PostCard from "@/components/post-card"

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="mt-36 px-8 md:px-0">
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter dark:text-gray-100 md:mb-24 md:px-44 md:text-7xl">
        More Posts
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-x-4 gap-y-20 overflow-visible dark:text-gray-100 sm:grid-cols-1 sm:gap-x-16 md:gap-x-32 md:px-44 lg:gap-x-48 lg:gap-y-14">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
