import { useState } from 'react'
import Image from 'next/legacy/image'

type ScreenshotLinkProps = {
  url: string
  text: string
  className: string
}

const ScreenshotLink = ({ url, text, className = '' }: ScreenshotLinkProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [linkScreenshot, setLinkScreenshot] = useState('')

  const fetchImage = async (url: string) => {
    let colorScheme: 'light' | 'dark' = 'light'
    if (typeof document !== 'undefined') {
      colorScheme = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'
    }
    try {
      setIsHovering(true)
      console.log('HOVER URL', url)
      const res = await fetch(
        `https://screenshot.briefkastenhq.com/api/image?url=${encodeURIComponent(
          url
        )}&colorScheme=${colorScheme}&skipCookieBannerClick=true`
      )
      const image = await res.blob()
      setLinkScreenshot(URL.createObjectURL(image))
    } catch (e) {
      console.error('Error fetching screenshot image', e)
    }
  }

  return (
    <span>
      <div
        className={`word relative inline-block ${className}`}
        onMouseOver={() => fetchImage(url)}
        onMouseOut={() => setIsHovering(false)}
        onFocus={() => fetchImage(url)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering && linkScreenshot && (
          <div className="pointer-events-none absolute right-1/2 bottom-[2.0rem] z-10 block w-32 animate-fade_in_up_5 lg:block">
            <Image
              src={linkScreenshot}
              height={180}
              width={300}
              unoptimized
              alt={text}
              className="rounded-md"
            />
          </div>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="border-underline-grow outline-none transition-all dark:ring-palevioletred"
        >
          {text}
        </a>
      </div>
    </span>
  )
}

export default ScreenshotLink
