import { useState } from "react"

const DarkToggle = () => {
  const [dark, setDark] = useState(
    typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  )

  const toggleDark = () => {
    setDark(!dark)
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="relative dark:text-gray-500 text-gray-800">
      {dark ? (
        <button
          onClick={toggleDark}
          className="rounded focus:outline-none focus:ring-pink-500 focus:ring-opacity-30 focus:ring-4"
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
          className="rounded focus:outline-none focus:ring-pink-400 focus:ring-opacity-10 focus:ring-4"
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
