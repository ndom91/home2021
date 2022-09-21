import Post from '../types/post'
import PostCard from '@/components/post-card'

type Props = {
  posts: Post[]
}

const MorePosts = ({ posts }: Props) => {
  return (
    <section className="mt-24 md:px-0">
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter dark:text-gray-100 md:mb-24 md:text-7xl max-w-7xl mx-auto">
        More Posts
      </h2>
      <div className="mb-24 flex flex-wrap gap-x-4 gap-y-20 overflow-visible dark:text-gray-100 sm:gap-x-4 md:gap-x-6 lg:gap-x-10 lg:gap-y-14 items-start justify-around">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default MorePosts
