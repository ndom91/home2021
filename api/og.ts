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

  // Generate the full URL out of the given path (GET parameter)
  const url: string = req.query.path as string
  const colorScheme: "light" | "dark" = req.query.colorScheme as
    | "light"
    | "dark"

  await page.emulateMedia({ colorScheme: colorScheme })

  // @ts-ignore
  await page.goto(url, {
    timeout: 15 * 1000,
  })

  // If homepage - wait 1s for enter animation to complete
  if (req?.query?.path === "https://ndo.dev/") {
    await page.waitForTimeout(1000)
  }
  // If twitter - wait for intro load animation to complete
  if (req?.query?.path.includes("https://twitter.com")) {
    await page.waitForTimeout(500)
  }

  const data = await page.screenshot({
    type: "png",
  })
  await browser.close()

  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader(
    "Cache-Control",
    "s-maxage=31536000, max-age=31536000, stale-while-revalidate"
  )
  res.setHeader("Content-Type", "image/png")

  res.end(data)
}
