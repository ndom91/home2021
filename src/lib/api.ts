import fs from "fs/promises"
import { join } from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import { remark } from "remark"
import html from "remark-html"

type Items = {
  [key: string]: string
}

type File = {
  excerpt: string
  content: string
}

const firstFourLines = (file: File) => {
  file.excerpt = file.content
    .split("\n")
    .filter((item: string) => item.length)
    .slice(0, 2)
    .join(" ")
}

const postsDirectory = join(process.cwd(), "src", "_posts")

export async function getPostSlugs() {
  return fs.readdir(postsDirectory)
}

const getMarkdownFile = async (filePath: string) => {
  const files = await fs.readdir(filePath)
  return files.filter((file) => file.match(new RegExp(`.*.md`, "ig")))[0]
}

const excerptToHtml = async (excerpt: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const e1 = await remark().use(html).process(excerpt)
  return e1.toString()
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const items: Items = {}
  const filePath = await getMarkdownFile(join(postsDirectory, slug))
  const fileContents = await fs.readFile(join(postsDirectory, slug, filePath), "utf8")
  const { data, excerpt, content } = matter(fileContents, {
    // @ts-expect-error comment
    excerpt: firstFourLines,
  })

  // Time to Read
  data.time = readingTime(fileContents)

  // Excerpt
  if (excerpt) {
    const htmlExcerpt = await excerptToHtml(excerpt)
    data.excerpt = htmlExcerpt.replace(/<h[1-4]\/?>/, "")
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs()
  const postFiles = await Promise.all(slugs.map(async (slug) => getPostBySlug(slug, fields)))
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const postLinks = require("../data/posts.json") as Items[]
  const posts: Items[] = [...postFiles, ...postLinks].sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1,
  )
  return posts
}
