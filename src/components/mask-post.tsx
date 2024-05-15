export default function Mask() {
  return (
    <div className="fixed top-0 left-1/2 w-full max-w-screen-2xl h-full transition -translate-x-1/2 pointer-events-none duration-0">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 800 800"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lgradient" gradientTransform="rotate(0 .5 .5)">
            <stop offset="0" stopColor="rgba(0,0,0,0)" />
            <stop offset="0.1" stopColor="rgba(255,255,255,1)" />
            <stop offset="0.9" stopColor="rgba(255,255,255,1)" />
            <stop offset="1" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
        </defs>
        <mask id="my-mask">
          <rect fill="url(#lgradient)" width="800" height="800"></rect>
        </mask>

        <polygon
          points="0,0 800,0 800,800 0,800"
          mask="url(#my-mask)"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fillOpacity="0.8"
          fill="currentColor"
          className="text-white dark:text-gray-900/80"
        />
      </svg>
    </div>
  )
}
