import { useWindowScroll } from "react-use"
import { useEffect } from "react"

const ProgressBar = () => {
  const { y } = useWindowScroll()
  const pageHeight = document.body.scrollHeight - window.innerHeight

  useEffect(() => {
    const percentScrolled = (Math.abs(y) / pageHeight) * 100
    const el = document.getElementById("scroll-progress")
    el?.style.setProperty(
      "--tw-gradient-stops",
      `var(--tw-ring-color) ${percentScrolled}%, transparent 0`,
    )
  }, [y, pageHeight])

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 z-50 p-0 w-full h-1.5 bg-gradient-to-r ring-pink-300 ring-opacity-90 dark:ring-opacity-90 dark:ring-palevioletred"
    />
  )
}

export default ProgressBar
