import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const firstFourLines = (file: any, options: any): any => {
  file.excerpt = file.content.split("\n").slice(0, 4).join(" ")
}

const postsDirectory = join(process.cwd(), "src", "_posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

function getMarkdownFile(filePath: string) {
  let files = fs.readdirSync(filePath)
  return files.filter((file) => file.match(new RegExp(`.*\.md`, "ig")))[0]
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const filePath = getMarkdownFile(join(postsDirectory, slug))
  const fileContents = fs.readFileSync(
    join(postsDirectory, slug, filePath),
    "utf8"
  )
  const { data, excerpt, content } = matter(fileContents, {
    excerpt: firstFourLines,
  })

  const time = readingTime(fileContents)
  data.time = time
  data.excerpt = excerpt?.trim()

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

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

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
