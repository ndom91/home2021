export const getAbsoluteURL = (path: string | string[]) => {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3003"
  return baseURL + path
}
