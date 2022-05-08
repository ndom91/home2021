import MorePosts from "@/components/more-posts"
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
        <h1 className="mt-8 mb-24 animate-fade_in_up_10 text-8xl font-bold leading-tight tracking-tighter opacity-0 dark:text-gray-100 md:pr-8 md:text-9xl">
          blog.{" "}
        </h1>
      </div>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          cover={heroPost.cover}
          date={heroPost.date}
          slug={heroPost.slug}
          time={heroPost.time}
        />
      )}
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </Layout>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "cover",
    "excerpt",
    "tags",
    "category",
    "time",
  ])

  return {
    props: { allPosts },
  }
}
