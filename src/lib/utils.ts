export const getAbsoluteURL = (path: string | string[]) => {
  console.log(process.env.VERCEL_URL)
  console.log(process.env.NODE_ENV)
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)

  const baseURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}${path}`
  return baseURL + path
}
