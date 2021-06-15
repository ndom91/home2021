type PostType = {
  slug: string
  title: string
  date: string
  cover: {
    imageFile: string
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
