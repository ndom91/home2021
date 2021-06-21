import { useRouter } from "next/router"
import ErrorPage from "next/error"
import dynamic from "next/dynamic"
import Head from "next/head"
import PostBody from "@/components/post-body"
import PostHeader from "@/components/post-header"
import Layout from "@/components/layout"
import PostTitle from "@/components/post-title"
// import ProgressBar from "@/components/read-progress"
import { getPostBySlug, getAllPosts } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"
import PostType from "../../types/post"

const ProgressBar = dynamic(() => import("../../components/read-progress"), {
  ssr: false,
})

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <ProgressBar />
      <Layout>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{post.title} | ndom91</title>
              <meta property="og:type" content="article" />
              <meta property="og:title" content={`${post.title} | ndom91`} />
              <meta
                property="og:url"
                content={`https://ndo.dev/${router.pathname}`}
              />
              <meta
                property="og:description"
                content={`${post.excerpt?.replaceAll("<[^>]*>", "")}`}
              />
              <meta property="article:author" content="Nico Domino" />
              <meta property="article:tag" content={post.tags.join(",")} />

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:title" content={`${post.title} | ndom91`} />
              <meta name="twitter:site" content="@ndom91" />
              <meta name="twitter:description" content={post.excerpt} />
              <meta name="twitter:image:alt" content={post.title} />
            </Head>
            <PostHeader
              title={post.title}
              cover={post.cover}
              date={post.date}
              time={post.time}
            />
            <PostBody content={post.content} />
          </article>
        )}
      </Layout>
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "cover",
    "tags",
    "excerpt",
    "category",
    "time",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts(["slug"])

  return {
    paths: await Promise.all(
      posts.map(async (posts) => ({
        params: {
          slug: posts.slug,
        },
      }))
    ),
    fallback: false,
  }
}
