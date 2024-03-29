type CursorProps = {
  cursor:
    | {
        x: number
        y: number
        lastUpdate: number
        country: string
        colo: string
      }
    | any
  color: string
}

const letters = {
  A: "🇦",
  B: "🇧",
  C: "🇨",
  D: "🇩",
  E: "🇪",
  F: "🇫",
  G: "🇬",
  H: "🇭",
  I: "🇮",
  J: "🇯",
  K: "🇰",
  L: "🇱",
  M: "🇲",
  N: "🇳",
  O: "🇴",
  P: "🇵",
  Q: "🇶",
  R: "🇷",
  S: "🇸",
  T: "🇹",
  U: "🇺",
  V: "🇻",
  W: "🇼",
  X: "🇽",
  Y: "🇾",
  Z: "🇿",
} as { [index: string]: string }

const Cursor = ({ cursor, color }: CursorProps) => {
  if (!cursor || (cursor.x === 0 && cursor.y === 0)) return null
  if (Date.now() - cursor.lastUpdate > 120000) return null
  const { x, y, country, colo } = cursor

  return (
    <div
      className="absolute"
      style={{
        top: `${y}px`,
        left: `${x}px`,
        zIndex: 999,
      }}
    >
      <svg width="24" height="36" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
          style={{
            fill: color,
            opacity: "0.9",
          }}
        ></path>
      </svg>
      {country && (
        <span
          className="flex absolute py-1 px-2 rounded-md translate-x-3 -translate-y-5"
          style={{
            backgroundColor: `${color}60`,
          }}
        >
          <span className="mr-1 font-mono text-sm font-medium leading-6 text-gray-200 align-middle">
            {colo}
          </span>
          <span>
            {letters[country[0].toUpperCase()]}
            {letters[country[1].toUpperCase()]}
          </span>
        </span>
      )}
    </div>
  )
}

export default Cursor
