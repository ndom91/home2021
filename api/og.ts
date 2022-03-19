import type { NextApiRequest, NextApiResponse } from "next"
import chromium from "chrome-aws-lambda"
import playwright from "playwright-core"

const hosts = ["https://ndo.dev/", "http://localhost:3003/"]

const generateImage = async (req: NextApiRequest, res: NextApiResponse) => {
  // Super basic security check
  if (req.headers["referer"] && !hosts.includes(req.headers["referer"])) {
    return res.status(401).json({
      error: "Not allowed",
    })
  }

  try {
    // Start Playwright with the dynamic chrome-aws-lambda args and path
    const browser = await playwright.chromium.launch({
      args: chromium.args,
      executablePath:
        process.env.NODE_ENV !== "development"
          ? await chromium.executablePath
          : "/usr/bin/chromium",
      headless:
        process.env.NODE_ENV !== "development" ? chromium.headless : true,
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
      await page.waitForTimeout(1000)
    }

    const data = await page.screenshot()
    await browser.close()

    // Set the s-maxage property to cache at the CDN layer
    res.setHeader("Cache-Control", "s-maxage=31536000, public")
    res.setHeader("Content-Type", "image/jpeg")
    res.end(data)
  } catch (error) {
    console.error(error)
    res.status(500).end(error)
  }
}

export default generateImage
