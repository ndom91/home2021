import { useEffect } from "react"
import Intro from "@/components/intro"
import Layout from "@/components/layout"
import Blur from "@/components/blur"
import Cursor from "@/components/cursor"
import Torus from "@/components/torus"
import { useLiveStore } from "../lib/zustand"

const Index = () => {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useLiveStore()

  useEffect(() => {
    enterRoom("ndom91/home2021", {})

    return () => {
      leaveRoom("ndom91/home2021")
    }
  }, [enterRoom, leaveRoom])

  // @ts-expect-error
  const setCursor = useLiveStore((state) => state.setCursor)
  const others = useLiveStore((state) => state.liveblocks.others)

  return (
    <div
      className="overflow-hidden"
      onPointerMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <Layout>
        <Torus />
        {others.map((person, i) => (
          <Cursor key={i} position={person.presence?.cursor} />
        ))}
        <Intro />
        <Blur />
      </Layout>
    </div>
  )
}

export default Index
