export const getAbsoluteURL = (path: string | string[]) => {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3003"
  return baseURL + path
}
