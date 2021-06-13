import PostPreview from "./post-preview"
import Post from "../@types/post"

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold tracking-tighter leading-tight md:text-7xl">
        More Stories
      </h2>
      <div className="grid gap-y-20 grid-cols-1 mb-32 md:gap-x-16 md:gap-y-32 md:grid-cols-2 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
