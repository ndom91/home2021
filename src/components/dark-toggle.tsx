import { useRouter } from "next/router"
import { animated, useSpring } from "react-spring"
import { useEffect } from "react"
import useStore from "@/lib/zustand"
import setFlickerAnimation from "@/lib/flicker"

const properties = {
  dark: {
    r: 9,
    transform: "rotate(50deg)",
    cx: 11,
    cy: 5,
    opacity: 0,
  },
  light: {
    r: 5,
    transform: "rotate(90deg)",
    cx: 30,
    cy: 0,
    opacity: 1,
  },
  springConfig: { mass: 2, tension: 200, friction: 20 },
}

const DarkToggle = () => {
  const router = useRouter()
  const theme = useStore((state) => state.theme)
  const setTheme = useStore((state) => state.setTheme)
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as "light" | "dark"
    if (localTheme) {
      setTheme(localTheme)
    } else if (document.documentElement.classList.contains("dark")) {
      setTheme("dark")
    }
  }, [setTheme])

  // Animate Toggle
  const { r, transform, cx, cy, opacity } = properties[theme]
  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  })
  const centerCircleProps = useSpring({ r, config: properties.springConfig })
  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  })
  const linesProps = useSpring({ opacity, config: properties.springConfig })

  const toggleDark = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark")
      document.documentElement.style.setProperty("color-scheme", "dark")
      setFlickerAnimation()

      // Switch Off
      const jsSoundOff = document.getElementById("js-sound-off") as HTMLAudioElement
      jsSoundOff?.play()

      if (router.pathname === "/") {
        // Neon Bulb Sound - play only on homepage
        setTimeout(() => {
          const jsNeonBulb = document.getElementById("js-sound-neon-bulb") as HTMLAudioElement
          jsNeonBulb?.play()
        }, 500)
      }
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.style.setProperty("color-scheme", "light")

      // Switch On
      setFlickerAnimation()
      const jsSoundOn = document.getElementById("js-sound-on") as HTMLAudioElement
      jsSoundOn?.play()
      setTheme("light")
      window.localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="relative text-gray-800 dark:text-gray-200">
      <button
        aria-label="Dark Toggle"
        type="button"
        onClick={toggleDark}
        className="p-1 rounded-md transition-shadow duration-300 hover:ring-4 hover:ring-pink-300 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:hover:ring-palevioletred dark:focus:ring-palevioletred"
      >
        <animated.svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="transparent"
          style={{
            ...svgContainerProps,
          }}
        >
          <mask id="myMask2">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <animated.circle
              // @ts-expect-error style prop
              style={maskedCircleProps}
              r="10"
              fill="black"
              stroke="black"
            />
          </mask>

          <animated.circle
            cx="12"
            cy="13"
            // @ts-expect-error style prop
            style={centerCircleProps}
            fill="currentColor"
            mask="url(#myMask2)"
          />
          <animated.g stroke="currentColor" style={linesProps}>
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </animated.g>
        </animated.svg>
      </button>
      <audio src="/assets/toggle-off.mp3" id="js-sound-off" preload="auto" hidden></audio>
      <audio src="/assets/toggle-on.mp3" id="js-sound-on" preload="auto" hidden></audio>
      <audio src="/assets/neon-bulb.mp3" id="js-sound-neon-bulb" preload="auto" hidden></audio>
    </div>
  )
}

export default DarkToggle
