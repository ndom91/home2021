import { useEffect, useState } from "react"

type CursorProps = {
  cursor: {
    x: number
    y: number
  }
}

const MyCursor = ({ cursor }: CursorProps) => {
  const [hover, setHover] = useState(false)
  // if (!cursor || (cursor.x === 0 && cursor.y === 0)) return null
  const { x, y } = cursor

  useEffect(() => {
    const handleMouseMove = () => {
      setHover(true)
    }
    const handleMouseLeave = () => {
      setHover(false)
    }
    const el = document.querySelectorAll("a, button")
    console.log(el)
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

  console.log("HOVER", hover)
  return (
    <div
      className="myCursor absolute"
      style={{
        // @ts-ignore
        top: `${parseInt(y)}px`,
        // @ts-ignore
        left: `${parseInt(x)}px`,
        zIndex: 999,
        background: "rgba(200,200,255,.2)",
        borderRadius: "100%",
        height: hover ? "64px" : "36px",
        pointerEvents: "none",
        position: "absolute",
        transform: "translate(-50%,-50%)",
        transitionDuration: "250ms",
        transitionProperty: "width,height,border-radius,transform",
        transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.22, 2.1)",
        width: hover ? "64px" : "36px",
      }}
    />
  )
}

export default MyCursor
