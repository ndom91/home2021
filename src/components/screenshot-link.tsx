import { useState } from "react"

type ScreenshotLinkProps = {
  image: string
  url: string
  text: string
  className?: string
}

const ScreenshotLink = ({ url, image, text, className = "" }: ScreenshotLinkProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <span>
      <div
        className={`word relative inline-block ${className}`}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <img src={`/screenshots/${image}`} className="hidden" />
        {isHovering && image && (
          <div className="block absolute bottom-16 right-1/2 z-10 w-32 rounded-md ring-4 transition rotate-6 pointer-events-none lg:block ring-zinc-100 animate-fade_in_up_5 dark:ring-zinc-800">
            <img src={`/screenshots/${image}`} alt={text} className="rounded-md" />
          </div>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all outline-none border-underline-grow dark:ring-palevioletred"
        >
          {text}
        </a>
      </div>
    </span>
  )
}

export default ScreenshotLink
