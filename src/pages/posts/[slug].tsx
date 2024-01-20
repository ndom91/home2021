import dynamic from "next/dynamic"
import Head from "next/head"
import PostHeader from "@/components/post-header"
import Layout from "@/components/layout-blog"
import PostType from "../../types/post"
import ScreenshotLink from "@/components/screenshot-link"
import CodeEditor from "@/components/mdx/code-editor"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import fs from "fs/promises"
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
const rehypePrism = require("@mapbox/rehype-prism")

import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils"

const components = {
  CodeEditor: CodeEditor,
  ScreenshotLink: ScreenshotLink,
}

const ProgressBar = dynamic(() => import("../../components/read-progress"), {
  ssr: false,
})

type Params = {
  params: {
    slug: string
  }
}

type Props = {
  source: any
  frontMatter: PostType
  slug: string
}

const Post = ({ source, frontMatter, slug }: Props) => {
  return (
    <>
      <ProgressBar />
      <Layout>
        <Head>
          <title>{`${frontMatter.title.trim()} | ndom91`}</title>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${frontMatter.title} | ndom91`} />
          <meta property="og:url" content={`https://ndo.dev/posts/${slug}`} />
          <meta property="og:description" content={frontMatter.excerpt ?? ""} />
          <meta property="article:author" content="Nico Domino" />
          <meta property="article:tag" content={frontMatter.tags.join(",")} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={`${frontMatter.title} | ndom91`} />
          <meta name="twitter:site" content="@ndom91" />
          <meta name="twitter:description" content={frontMatter.excerpt} />
          <meta name="twitter:image:alt" content={frontMatter.title} />
        </Head>
        <article className="mt-12 mb-32 max-w-full md:mt-12">
          <PostHeader post={frontMatter} />
          <div className="mx-auto max-w-4xl dark:text-gray-100 prose prose-lg dark:prose-dark">
            <MDXRemote {...source} components={components} lazy />
          </div>
        </article>
      </Layout>
    </>
  )
}

export default Post

export async function getStaticProps({ params }: Params) {
  const postFilePath = path.join(POSTS_PATH, params.slug, "index.mdx")
  const source = await fs.readFile(postFilePath)

  const { content, data } = matter(source)

  data.excerpt = content
    .split("\n")
    .filter((item: string) => item.length)
    .slice(0, 2)
    .join(" ")

  data.time = readingTime(content)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "prepend" }]],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  }
}

export const getStaticPaths = async () => {
  const filePaths = await postFilePaths()
  const paths = filePaths
    .map((path: string) => path.replace(/\.mdx?$/, ""))
    .map((slug: string) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
