import { useState } from "react"
import Image from "next/image"

type Props = {
  url: string
  text: string
  className: string
  underline?: boolean
}

const ScreenshotLink = ({ url, text, className, underline = true }: Props) => {
  const [isHovering, setIsHovering] = useState(false)
  const [linkScreenshot, setLinkScreenshot] = useState("") //{

  const fetchImage = async (url: string) => {
    let colorScheme: "light" | "dark" = "light"
    if (typeof document !== "undefined") {
      colorScheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    }
    try {
      setIsHovering(true)
      const req = await fetch(
        `/api/og?path=${encodeURIComponent(url)}&colorScheme=${colorScheme}`
      )
      // const image = await req.blob()
      // setLinkScreenshot(URL.createObjectURL(image))
      const image = await req.text()
      setLinkScreenshot(`data:image/png;base64, ${image}`)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div
      className={`relative inline-block word ${className}`}
      onMouseOver={() => fetchImage(url)}
      onMouseOut={() => setIsHovering(false)}
    >
      {isHovering && linkScreenshot && (
        <div className="absolute z-10 block w-32 pointer-events-none right-1/2 lg:block bottom-[2.0rem] animate-fade-in-up-5">
          <Image
            src={linkScreenshot}
            height={180}
            width={300}
            unoptimized
            alt={text}
            className="rounded-sm"
          />
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all border-underline-grow"
        // className={
        //   underline
        //     ? `transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300`
        //     : ""
        // }
      >
        {text}
      </a>
    </div>
  )
}

export default ScreenshotLink
