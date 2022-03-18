import { useEffect } from "react"
import Intro from "@/components/intro"
import Layout from "@/components/layout"
import Blur from "@/components/blur"
import Cursor from "@/components/cursor"
import { useLiveStore } from "../lib/zustand"

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

const Index = () => {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useLiveStore()

  useEffect(() => {
    enterRoom(`ndom91/home2021/${process.env.NODE_ENV}`, {})

    return () => {
      leaveRoom(`ndom91/home2021/${process.env.NODE_ENV}`)
    }
  }, [enterRoom, leaveRoom])

  // @ts-expect-error
  const setCursor = useLiveStore((state) => state.setCursor)
  const others = useLiveStore((state) => state.liveblocks.others)
  // const color = cursorColors[Math.floor(Math.random() * 11)]

  return (
    <div
      className="overflow-hidden"
      onPointerMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <Layout>
        {others.map((person, i) => (
          <Cursor
            key={i}
            color={cursorColors[i]}
            position={person.presence?.cursor}
          />
        ))}
        <Intro />
        <Blur />
      </Layout>
    </div>
  )
}

export default Index
