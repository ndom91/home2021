import type { NextApiRequest, NextApiResponse } from "next"
import chromium from "chrome-aws-lambda"
import playwright from "playwright-core"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Start Playwright with the dynamic chrome-aws-lambda args
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath:
      process.env.NODE_ENV !== "development"
        ? await chromium.executablePath
        : "/usr/bin/chromium",
    headless: process.env.NODE_ENV !== "development" ? chromium.headless : true,
  })

  // Create a page with the recommended Open Graph image size
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 720,
    },
  })

  // Extract the url from the query parameter `path`
  const url = req.query.path as string
  const colorScheme = req.query.colorScheme as
    | "light"
    | "dark"
    | "no-preference"
    | null

  await page.emulateMedia({ colorScheme })

  await page.goto(url)

  // If homepage - wait for enter animation to complete
  if (req?.query?.path === "https://ndo.dev/") {
    await page.waitForTimeout(1000)
  }
  // If twitter - wait for intro load animation to complete
  if (req?.query?.path.includes("https://twitter.com")) {
    await page.waitForTimeout(500)
  }

  const data = await page.screenshot({
    type: "jpeg",
  })
  await browser.close()

  // Set the s-maxage property to cache at the CDN layer, and max-age for the client browser cache
  res.setHeader(
    "Cache-Control",
    "s-maxage=31536000, max-age=31536000, stale-while-revalidate"
  )
  res.setHeader("Content-Type", "image/jpeg")
  res.end(data)
}
