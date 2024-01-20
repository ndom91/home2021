import OthersCursor from "@/components/cursor"
import MyCursor from "@/components/my-cursor"
import { useLiveStore } from "../lib/zustand"
import { useEffect, useState } from "react"

const cursorColors = [
  "#F28FAD",
  "#89DCEB",
  "#ABE9B3",
  "#F2CDCD",
  "#DDB6F2",
  "#F5C2E7",
  "#E8A2AF",
  "#F8BD96",
  "#FAE3B0",
  "#B5E8E0",
  "#96CDFB",
]

type MyCursor = {
  x: number
  y: number
}

const RenderCursors = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [myCursor, setMyCursor] = useState<MyCursor>({ x: 0, y: 0 })

  const {
    liveblocks: { enterRoom, leaveRoom, others: otherUsers },
  } = useLiveStore()

  const setCursor = useLiveStore((state) => state.setCursor)
  const [visitorDetails, setVisitorDetails] = useState<{
    [index: string]: string
  }>({})

  useEffect(() => {
    enterRoom(`ndom91/home2021/${process.env.NODE_ENV}`)

    return () => {
      leaveRoom(`ndom91/home2021/${process.env.NODE_ENV}`)
    }
  }, [enterRoom, leaveRoom])

  useEffect(() => {
    if (!visitorDetails["loc"]) {
      fetchCountry()
    }
  }, [visitorDetails])

  useEffect(() => {
    const main = document?.documentElement
    const mainBoundingRect = main?.getBoundingClientRect()
    if (mainBoundingRect) {
      setOffset(mainBoundingRect ?? { x: 0, y: 0 })
    }
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
        lastUpdate: Date.now(),
        country: visitorDetails["loc"],
        colo: visitorDetails["colo"],
      })
      setMyCursor({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      })
    }
    main.addEventListener("pointermove", handleMouseMove)
    return () => {
      main.removeEventListener("pointermove", handleMouseMove)
    }
  }, [])

  const fetchCountry = async () => {
    const url = "https://www.cloudflare.com/cdn-cgi/trace"
    const cfResp = await fetch(url)
    const cfPlaintext = await cfResp.text()
    const cfJson = cfPlaintext
      .trim()
      .split("\n")
      .reduce((obj, line) => {
        const pair = line.split("=")
        obj[pair[0]] = pair[1]
        return obj
      }, {} as { [index: string]: string })

    setVisitorDetails(cfJson)
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full cursor-none">
      <MyCursor cursor={myCursor} />
      {otherUsers.map((person, i: number) => (
        <OthersCursor key={i} color={cursorColors[i]} cursor={person.presence.cursor} />
      ))}
    </div>
  )
}

export default RenderCursors
