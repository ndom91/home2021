type ScreenshotLinkProps = {
  image: string
  url: string
  children: React.ReactNode
  className?: string
}

const ScreenshotLink = ({ url, image, className = "", children }: ScreenshotLinkProps) => {
  return (
    <div className={`word group relative inline-block ${className}`}>
      <img
        data-comment="load image before hover to ensure smooth animation"
        alt={image}
        src={`/screenshots/${image}`}
        className="hidden"
      />
      <div className="hidden absolute bottom-16 right-1/2 z-20 p-1 w-32 rounded-lg border transition rotate-6 pointer-events-none group-hover:block border-gray-200/50 animate-fade_in_up_5 bg-gray-100/50 backdrop-blur-xl dark:bg-gray-300/10 dark:border-gray-400/50">
        <img src={`/screenshots/${image}`} className="rounded-md" />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all outline-none border-underline-grow dark:ring-palevioletred"
      >
        {children}
      </a>
    </div>
  )
}

export default ScreenshotLink
