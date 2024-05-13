export default function Mask() {
  return (
    <svg
      className="fixed top-0 left-1/2 w-full max-w-screen-2xl h-full transition -translate-x-1/2 pointer-events-none duration-0"
      style={{ maskRepeat: "repeat" }}
      viewBox="0 0 800 800"
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

      <rect
        mask="url(#my-mask)"
        x="0"
        y="0"
        width="800"
        height="800"
        fillOpacity="0.8"
        fill="currentColor"
        className="text-white dark:text-gray-900/80"
      ></rect>
    </svg>
  )
}
