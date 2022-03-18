type CursorProps = {
  position: {
    x: number
    y: number
  }
}

const cursorColors = [
  "#F2CDCD",
  "#DDB6F2",
  "#F5C2E7",
  "#E8A2AF",
  "#F28FAD",
  "#F8BD96",
  "#FAE3B0",
  "#ABE9B3",
  "#B5E8E0",
  "#96CDFB",
  "#89DCEB",
]
const color = cursorColors[Math.floor(Math.random() * 11)]

const Cursor = ({ position }: CursorProps) => {
  if (!position || (position.x === 0 && position.y === 0)) return null
  const { x, y } = position
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
