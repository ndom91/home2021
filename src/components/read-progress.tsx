import { useWindowScroll } from "react-use"
import { useEffect } from "react"

const ProgressBar = () => {
  const { y } = useWindowScroll()
  // const [scrollPos, setScrollPos] = useState(0)
  const pageHeight = document.body.scrollHeight - window.innerHeight

  useEffect(() => {
    // console.log(verticalScrollOffset, scrollTop)
    const percentScrolled = Math.abs(y) / pageHeight
    const el = document.getElementById("scroll-progress")
    if (el) {
      el.style.background = `
        linear-gradient(
          to right,
          var(--tw-ring-color) ${percentScrolled * 100}%,
          transparent 0
        )
      `
    }
  }, [y, pageHeight])

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 z-50 w-full h-2 p-0 ring-pink-300 dark:ring-palevioletred"
    />
  )
}

export default ProgressBar
