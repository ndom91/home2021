import type { NextApiRequest, NextApiResponse } from "next"
import chromium from "chrome-aws-lambda"
import playwright from "playwright-core"
import { getAbsoluteURL } from "../src/lib/utils"

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

  // Generate the full URL out of the given path (GET parameter)
  const url = getAbsoluteURL(req?.query?.path || "")
  await page.goto(url, {
    timeout: 15 * 1000,
  })
  if (req?.query?.path === "/") {
    await page.waitForTimeout(2000)
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
