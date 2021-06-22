import type { NextApiRequest, NextApiResponse } from "next"
import chromium from "chrome-aws-lambda"
import playwright from "playwright-core"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Start the browser with the AWS Lambda wrapper (chrome-aws-lambda)
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })

  // Create a page with the Open Graph image size best practise
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  })

  console.log(process.env.VERCEL_URL)
  console.log(process.env.NODE_ENV)
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
  // Generate the full URL out of the given path (GET parameter)
  const url = `https://${process.env.VERCEL_URL}${req?.query?.path}`
  await page.goto(url, {
    timeout: 15 * 1000,
  })
  console.log(req?.query?.path)
  if (req?.query?.path === "/") {
    await page.waitForTimeout(1000)
  }
  const data = await page.screenshot({
    type: "png",
  })
  await browser.close()

  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate")
  res.setHeader("Content-Type", "image/png")

  // write the image to the response with the specified Content-Type
  res.end(data)
}
