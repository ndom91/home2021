import MorePosts from "@/components/more-posts"
import HeroPost from "@/components/hero-post"
import Layout from "@/components/layout"
import { getAllPosts } from "../lib/api"
import { type Post } from "@/types/post"

type Props = {
  allPosts: Post[]
}

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <Layout>
      <main className="flex relative flex-col gap-4 items-center max-w-full">
        <h1 className="w-full max-w-7xl text-6xl font-bold tracking-tighter leading-tight opacity-0 md:pr-8 md:text-7xl dark:text-gray-100 animate-fade_in_up_10">
          blog.{" "}
        </h1>
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length ? <MorePosts posts={morePosts} /> : null}
      </main>
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
