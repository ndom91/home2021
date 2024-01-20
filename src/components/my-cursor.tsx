import { useEffect, useState } from "react"
import useStore from "../lib/zustand"

type CursorProps = {
  cursor: {
    x: number
    y: number
  }
}

const MyCursor = ({ cursor }: CursorProps) => {
  const theme = useStore((state) => state.theme)
  const [isHovering, setIsHovering] = useState(false)
  const isHoveringText = useStore((state) => state.hoverText)
  const download = useStore((state) => state.download)

  useEffect(() => {
    const handleMouseMove = () => {
      setIsHovering(true)
    }
    const handleMouseLeave = () => {
      setIsHovering(false)
    }
    const el = document.querySelectorAll("a, button")
    el.forEach((link) => {
      link.addEventListener("mouseover", handleMouseMove)
      link.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      el.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseMove)
        link.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  const backgroundColor = () => {
    if (isHoveringText) return "red"
    if (isHovering) {
      return theme === "dark" ? "rgba(200,200,255,.1)" : "rgba(50,50,50,0.1)"
    } else {
      return theme === "dark" ? "rgba(200,200,255,.2)" : "rgba(50,50,50,0.4)"
    }
  }

  return (
    <>
      {download ? (
        <div
          className="p-2 rounded-full bg-slate-100/20 dark:bg-slate-900/30 dark:text-slate-100"
          style={{
            top: `${cursor.y}px`,
            left: `${cursor.x}px`,
            zIndex: 999,
            pointerEvents: "none",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            transitionDuration: "250ms",
            transitionProperty: "width,height,border-radius,background",
            transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.22, 2.1)",
            width: "48px",
            height: "48px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line
              x1="128"
              y1="152"
              x2="128"
              y2="40"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <path
              d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <polyline
              points="168 112 128 152 88 112"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
        </div>
      ) : (
        <div>
          {isHoveringText ? (
            <div
              className="hidden absolute bg-pink-300 md:block"
              data-label="thin-text-cursor"
              style={{
                top: `${cursor.y}px`,
                left: `${cursor.x}px`,
                zIndex: 999,
                borderRadius: "2px",
                height: "36px",
                pointerEvents: "none",
                position: "absolute",
                transform: "translate(-50%,-50%)",
                transitionDuration: "250ms",
                transitionProperty: "width,height,border-radius,background",
                transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.22, 2.1)",
                width: "3px",
              }}
            />
          ) : (
            <div
              className="hidden absolute md:block"
              data-label="round-cursor"
              style={{
                top: `${cursor.y}px`,
                left: `${cursor.x}px`,
                zIndex: 999,
                background: backgroundColor(),
                borderRadius: isHovering ? "8px" : "100%",
                height: isHovering ? "48px" : "36px",
                pointerEvents: "none",
                position: "absolute",
                transform: "translate(-50%,-50%)",
                transitionDuration: "250ms",
                transitionProperty: "width,height,border-radius,background",
                transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.22, 2.1)",
                width: isHovering ? "48px" : "36px",
              }}
            />
          )}
        </div>
      )}
    </>
  )
}

export default MyCursor
