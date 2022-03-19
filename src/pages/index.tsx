import { useEffect, useState } from "react"
import Intro from "@/components/intro"
import Layout from "@/components/layout"
import Blur from "@/components/blur"
import Cursor from "@/components/cursor"
import { useLiveStore } from "../lib/zustand"

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

const Index = () => {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useLiveStore()
  // @ts-expect-error
  const setCursor = useLiveStore((state) => state.setCursor)
  const others = useLiveStore((state) => state.liveblocks.others)
  const [visitorDetails, setVisitorDetails] = useState<{
    [index: string]: string
  }>({})

  useEffect(() => {
    enterRoom(`ndom91/home2021/${process.env.NODE_ENV}`, {})

    return () => {
      leaveRoom(`ndom91/home2021/${process.env.NODE_ENV}`)
    }
  }, [enterRoom, leaveRoom])

  useEffect(() => {
    if (!visitorDetails["loc"]) {
      fetchCountry()
    }
  }, [visitorDetails])

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
    <div
      className="overflow-hidden"
      onPointerMove={(e) =>
        setCursor({
          x: e.clientX,
          y: e.clientY,
          lastUpdate: Date.now(),
          country: visitorDetails["loc"],
        })
      }
    >
      <Layout>
        {others.map((person, i) => (
          <Cursor
            key={i}
            color={cursorColors[i]}
            cursor={person.presence?.cursor}
          />
        ))}
        <Intro />
        <Blur />
      </Layout>
    </div>
  )
}

export default Index
