import fs from 'fs/promises'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'src', '_posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = async () => {
  return fs.readdir(POSTS_PATH)
}
