import MoreStories from "@/components/more-stories"
import HeroPost from "@/components/hero-post"
import Layout from "@/components/layout"
import { getAllPosts } from "../lib/api"
import Post from "../types/post"

type Props = {
  allPosts: Post[]
}

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <div className="relative">
        <h1 className="mb-24 mt-8 dark:text-gray-100 text-7xl font-bold tracking-tighter leading-tight opacity-0 animate-fade-in-up-10 md:pr-8 md:text-8xl">
          blog.
        </h1>
      </div>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          cover={heroPost.cover}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "cover",
    "excerpt",
    "tags",
    "category",
  ])

  return {
    props: { allPosts },
  }
}
