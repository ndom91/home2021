type ScreenshotLinkProps = {
  image: string
  url: string
  children: React.ReactNode
}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const ScreenshotLink = ({ url, image, children }: ScreenshotLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="word group relative inline-block !duration-100 transition-all outline-none border-underline-grow dark:ring-palevioletred"
    >
      <img
        data-comment="load image before hover to ensure smooth animation"
        alt={image}
        src={`/screenshots/${image}`}
        className="hidden"
      />
      <div
        style={{
          // @ts-expect-error setting css variable
          "--image_rotation": `${randomInteger(-8, 8)}deg`,
        }}
        className="hidden opacity-0 absolute bottom-16 right-1/2 z-20 p-1 w-32 rounded-lg border transition ease-[var(--ease-spring-5)] rotate-6 pointer-events-none group-focus:block group-hover:block border-gray-200/50 animate-fade_in_up_5_rotate bg-gray-100/50 backdrop-blur-xl dark:bg-gray-300/10 dark:border-gray-400/50"
      >
        <img src={`/screenshots/${image}`} className="rounded-md" />
      </div>
      {children}
    </a>
  )
}

export default ScreenshotLink
