import { useWindowScroll } from "react-use"
import { useEffect } from "react"

const ProgressBar = () => {
  const { y } = useWindowScroll()
  const pageHeight = document.body.scrollHeight - window.innerHeight

  useEffect(() => {
    const percentScrolled = Math.abs(y) / pageHeight
    const el = document.getElementById("scroll-progress")
    if (el) {
      el.style.setProperty(
        "--tw-gradient-stops",
        `#f9a8d4 ${percentScrolled * 100}%, transparent 0`
      )
    }
  }, [y, pageHeight])

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 z-50 w-full h-2 p-0 bg-gradient-to-r from-pink-300 to-transparent via-transparent ring-pink-300 dark:ring-palevioletred"
    />
  )
}

export default ProgressBar
