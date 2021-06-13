type PostType = {
  slug: string
  title: string
  date: string
  cover: {
    image: string
    width: number
    height: number
  }
  excerpt: string
  tags: string[]
  category: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
