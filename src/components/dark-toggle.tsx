import { useEffect, useState } from "react"

const DarkToggle = () => {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setDark(false)
    }
  }, [])

  const toggleDark = () => {
    setDark(!dark)
    if (dark) {
      document.documentElement.classList.add("dark")
      new Audio("/assets/toggle-off.mp3").play()
    } else {
      document.documentElement.classList.remove("dark")
      new Audio("/assets/toggle-on.mp3").play()
    }
  }

  return (
    <div className="relative dark:text-gray-400 text-gray-800">
      {dark ? (
        <button
          onClick={toggleDark}
          className="p-1 rounded-full focus:outline-none transition-shadow duration-500 focus:ring-pink-300 hover:ring-pink-300 hover:ring-4 focus:ring-4"
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
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={toggleDark}
          className="duration-400 p-1 rounded-full focus:outline-none transition-shadow hover:ring-pink-400 focus:ring-pink-400 focus:ring-opacity-70 hover:ring-4 focus:ring-4"
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
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default DarkToggle
