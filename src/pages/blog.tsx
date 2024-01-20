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
      <h1 className="mx-auto mt-8 mb-24 w-full max-w-7xl text-8xl font-bold tracking-tighter leading-tight opacity-0 md:pr-8 md:text-9xl dark:text-gray-100 animate-fade_in_up_10">
        blog.{" "}
      </h1>
      {heroPost && <HeroPost post={heroPost} />}
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
