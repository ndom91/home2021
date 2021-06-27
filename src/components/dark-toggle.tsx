import { useEffect, useState } from "react"
import { useLocalStorage } from "react-use"
import setFlickerAnimation from "../lib/flicker"

const DarkToggle = () => {
  const [dark, setDark] = useState(true)
  const [value, setValue] = useLocalStorage("theme", "", {
    raw: true,
  })
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setDark(false)
    }
  }, [])

  const toggleDark = () => {
    setDark(!dark)
    if (dark) {
      document.documentElement.classList.add("dark")
      setValue("dark")
      setFlickerAnimation()
      const jsSoundOff = document.getElementById(
        "js-sound-off"
      ) as HTMLAudioElement
      jsSoundOff?.play()
      setTimeout(() => {
        const jsNeonBulb = document.getElementById(
          "js-sound-neon-bulb"
        ) as HTMLAudioElement
        jsNeonBulb?.play()
      }, 500)
    } else {
      document.documentElement.classList.remove("dark")
      setValue("light")
      setFlickerAnimation()
      const jsSoundOn = document.getElementById(
        "js-sound-on"
      ) as HTMLAudioElement
      jsSoundOn?.play()
    }
  }

  return (
    <div className="relative text-gray-800 dark:text-gray-400">
      {dark ? (
        <button
          aria-label="Light Toggle"
          onClick={toggleDark}
          className="p-1 transition-shadow duration-300 rounded-md focus:outline-none hover:ring-4 focus:ring-4 focus:ring-pink-300 hover:ring-pink-300"
        >
          {/* Sun */}
          <svg
            className="m-0.5 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            height={32}
            width={32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      ) : (
        <button
          aria-label="Dark Toggle"
          onClick={toggleDark}
          className="p-1 transition-shadow duration-300 rounded-md focus:outline-none hover:ring-4 focus:ring-4 hover:ring-palevioletred focus:ring-palevioletred"
        >
          {/* Moon */}
          <svg
            className="m-0.5 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            height={32}
            width={32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      )}
      <audio
        src="/assets/toggle-off.mp3"
        id="js-sound-off"
        preload="auto"
        hidden
      ></audio>
      <audio
        src="/assets/toggle-on.mp3"
        id="js-sound-on"
        preload="auto"
        hidden
      ></audio>
      <audio
        src="/assets/neon-bulb.mp3"
        id="js-sound-neon-bulb"
        preload="auto"
        hidden
      ></audio>
    </div>
  )
}

export default DarkToggle
