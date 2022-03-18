type CursorProps = {
  position: {
    x: number
    y: number
    lastUpdate: number
  }
  color: string
}

const Cursor = ({ position, color }: CursorProps) => {
  if (!position || (position.x === 0 && position.y === 0)) return null
  const { x, y, lastUpdate } = position
  if (Date.now() - lastUpdate > 120000) return null
  return (
    <svg
      className="absolute"
      style={{
        // @ts-ignore
        top: `${parseInt(y)}px`,
        // @ts-ignore
        left: `${parseInt(x)}px`,
        zIndex: 999,
      }}
      width="24"
      height="36"
      viewBox="0 0 24 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        style={{
          fill: color,
          opacity: "0.9",
        }}
      ></path>
    </svg>
  )
}

export default Cursor
