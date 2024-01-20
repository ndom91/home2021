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
            transitionProperty: "width,height,border-radius,transform,background",
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
            transitionProperty: "width,height,border-radius,transform,background",
            transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.22, 2.1)",
            width: isHovering ? "48px" : "36px",
          }}
        />
      )}
    </>
  )
}

export default MyCursor
