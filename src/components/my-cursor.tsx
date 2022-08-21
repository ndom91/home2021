import { useEffect, useState } from 'react'
import useStore from '../lib/zustand'

type CursorProps = {
  cursor: {
    x: number
    y: number
  }
}

const MyCursor = ({ cursor }: CursorProps) => {
  const { x, y } = cursor
  const [hover, setHover] = useState(false)
  const theme = useStore((state) => state.theme)
  const hoverText = useStore((state) => state.hoverText)

  useEffect(() => {
    const handleMouseMove = () => {
      setHover(true)
    }
    const handleMouseLeave = () => {
      setHover(false)
    }
    const el = document.querySelectorAll('a, button')
    el.forEach((link) => {
      link.addEventListener('mouseover', handleMouseMove)
      link.addEventListener('mouseleave', handleMouseLeave)
    })
    return () => {
      el.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseMove)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const backgroundColor = () => {
    if (hoverText) return 'red'
    if (hover) {
      return theme === 'dark' ? 'rgba(200,200,255,.1)' : 'rgba(50,50,50,0.1)'
    } else {
      return theme === 'dark' ? 'rgba(200,200,255,.2)' : 'rgba(50,50,50,0.4)'
    }
  }

  return (
    <>
      {hoverText ? (
        <div
          className="absolute hidden bg-pink-300 md:block"
          style={{
            top: `${y}px`,
            left: `${x}px`,
            zIndex: 999,
            borderRadius: '2px',
            height: '36px',
            pointerEvents: 'none',
            position: 'absolute',
            transform: 'translate(-50%,-50%)',
            transitionDuration: '250ms',
            transitionProperty:
              'width,height,border-radius,transform,background',
            transitionTimingFunction: 'cubic-bezier(0.68, -0.6, 0.22, 2.1)',
            width: '3px',
          }}
        />
      ) : (
        <div
          className="absolute hidden md:block"
          style={{
            top: `${y}px`,
            left: `${x}px`,
            zIndex: 999,
            background: backgroundColor(),
            borderRadius: hover ? '16px' : '100%',
            height: hover ? '48px' : '36px',
            pointerEvents: 'none',
            position: 'absolute',
            transform: 'translate(-50%,-50%)',
            transitionDuration: '250ms',
            transitionProperty:
              'width,height,border-radius,transform,background',
            transitionTimingFunction: 'cubic-bezier(0.68, -0.6, 0.22, 2.1)',
            width: hover ? '48px' : '36px',
          }}
        />
      )}
    </>
  )
}

export default MyCursor
