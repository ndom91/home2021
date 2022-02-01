import { useState } from "react"
import Image from "next/image"

type Props = {
  url: string
  text: string
  className: string
}

const ScreenshotLink = ({ url, text, className = "" }: Props) => {
  const [isHovering, setIsHovering] = useState(false)
  const [linkScreenshot, setLinkScreenshot] = useState("")

  const fetchImage = async (url: string) => {
    let colorScheme: "light" | "dark" = "light"
    if (typeof document !== "undefined") {
      colorScheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    }
    try {
      setIsHovering(true)
      const res = await fetch(
        `/api/og?path=${encodeURIComponent(url)}&colorScheme=${colorScheme}`
      )
      const image = await res.blob()
      setLinkScreenshot(URL.createObjectURL(image))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <span>
      <div
        className={`relative inline-block word ${className}`}
        onMouseOver={() => fetchImage(url)}
        onMouseOut={() => setIsHovering(false)}
        onFocus={() => fetchImage(url)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering && linkScreenshot && (
          <div className="absolute z-10 block w-32 pointer-events-none right-1/2 lg:block bottom-[2.0rem] animate-fade_in_up_5">
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
          className="transition-all border-underline-grow dark:ring-palevioletred outline-none"
        >
          {text}
        </a>
      </div>
    </span>
  )
}

export default ScreenshotLink
