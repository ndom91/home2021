export default function Mask() {
  return (
    <div className="fixed top-0 left-0 w-screen h-full transition pointer-events-none duration-0">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="rgradient" r="0.95" cx="0.5" cy="0.5">
            <stop offset="0" stopColor="rgba(0,0,0,1)" />
            <stop offset="0.3" stopColor="rgba(0,0,0,0.99)" />
            <stop offset="0.5" stopColor="rgba(0,0,0,0.1)" />
            <stop offset="1" stopColor="rgba(0,0,0,0)" />
          </radialGradient>

          <filter id="blur-filter" width="400%" height="400%" x="-200%" y="-200%">
            <feGaussianBlur stdDeviation="80 80" in="SourceGraphic" />
          </filter>
        </defs>
        <mask id="my-mask">
          <rect fill="white" width="800" height="800"></rect>
          <circle filter="url(#blur-filter)" fill="url(#rgradient)" cx="400" cy="200" r="300" />
          <circle filter="url(#blur-filter)" fill="url(#rgradient)" cx="600" cy="600" r="300" />
          <circle filter="url(#blur-filter)" fill="url(#rgradient)" cx="200" cy="600" r="200" />
        </mask>

        <polygon
          mask="url(#my-mask)"
          points="0,0 800,0 800,800 0,800"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fillOpacity="0.3"
          fill="currentColor"
          className="text-pink-300/50 dark:text-purple-300/10"
        />
      </svg>
    </div>
  )
}
