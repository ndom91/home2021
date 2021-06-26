import { useState } from "react"
import Image from "next/image"
import mql from "@microlink/mql"

type Props = {
  url: string
  text: string
  className: string
}

const ScreenshotLink = ({ url, text, className }: Props) => {
  const [isHovering, setIsHovering] = useState(false)
  const [linkScreenshot, setLinkScreenshot] = useState({
    url: "",
    height: 0,
    width: 0,
  })

  const fetchImage = async (url: string) => {
    let colorScheme: "light" | "dark" = "light"
    if (typeof document !== "undefined") {
      colorScheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    }
    const { status, data } = await mql(url, {
      screenshot: true,
      colorScheme,
      meta: false,
    })
    if (status === "success") {
      setLinkScreenshot({
        url: data?.screenshot?.url ?? "",
        height: data?.screenshot?.height ?? 0,
        width: data?.screenshot?.width ?? 0,
      })
    }
    setIsHovering(true)
  }

  return (
    <div className={`relative inline-block word ${className}`}>
      {isHovering && (
        <div className="absolute z-10 block w-32 pointer-events-none right-1/2 lg:block bottom-[2.0rem] animate-fade-in-up-5">
          <Image
            src={linkScreenshot.url}
            height={linkScreenshot.height}
            width={linkScreenshot.width}
            unoptimized
            alt="Checkly Screenshot"
            className="rounded-md"
          />
        </div>
      )}
      <a
        href={url}
        target="_blank"
        onMouseEnter={() => fetchImage(url)}
        onMouseOut={() => setIsHovering(false)}
        className="transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  )
}

export default ScreenshotLink
