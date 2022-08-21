import { useEffect, useState } from 'react'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Blur from '@/components/blur'
import Cursor from '@/components/cursor'
import MyCursor from '@/components/my-cursor'
import { useLiveStore } from '../lib/zustand'

const cursorColors = [
  '#F28FAD',
  '#89DCEB',
  '#ABE9B3',
  '#F2CDCD',
  '#DDB6F2',
  '#F5C2E7',
  '#E8A2AF',
  '#F8BD96',
  '#FAE3B0',
  '#B5E8E0',
  '#96CDFB',
]

type MyCursor = {
  x: number
  y: number
}

type Person = {
  presence: {
    cursor: {
      x: number
      y: number
      lastUpdate: number
      country: string
      colo: string
    }
  }
}

const Index = () => {
  let offset = { x: 0, y: 0 }
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useLiveStore()
  // @ts-expect-error
  const setCursor = useLiveStore((state) => state.setCursor)
  const others = useLiveStore((state) => state.liveblocks.others)
  const [visitorDetails, setVisitorDetails] = useState<{
    [index: string]: string
  }>({})

  const [myCursor, setMyCursor] = useState<MyCursor>({ x: 200, y: 200 })

  useEffect(() => {
    enterRoom(`ndom91/home2021/${process.env.NODE_ENV}`, {})

    return () => {
      leaveRoom(`ndom91/home2021/${process.env.NODE_ENV}`)
    }
  }, [enterRoom, leaveRoom])

  useEffect(() => {
    if (!visitorDetails['loc']) {
      fetchCountry()
    }
  }, [visitorDetails])

  const fetchCountry = async () => {
    const url = 'https://www.cloudflare.com/cdn-cgi/trace'
    const cfResp = await fetch(url)
    const cfPlaintext = await cfResp.text()
    const cfJson = cfPlaintext
      .trim()
      .split('\n')
      .reduce((obj, line) => {
        const pair = line.split('=')
        obj[pair[0]] = pair[1]
        return obj
      }, {} as { [index: string]: string })

    setVisitorDetails(cfJson)
  }

  if (typeof document !== 'undefined') {
    const main = document?.querySelector('main')
    offset = main?.getBoundingClientRect() ?? { x: 0, y: 0 }
  }

  return (
    <div
      className="index overflow-hidden"
      onPointerMove={(e) => {
        setCursor({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
          lastUpdate: Date.now(),
          country: visitorDetails['loc'],
          colo: visitorDetails['colo'],
        })
        setMyCursor({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        })
      }}
    >
      <Layout>
        <MyCursor cursor={myCursor} />
        {others.map((person, i: number) => (
          <Cursor
            key={i}
            color={cursorColors[i]}
            // @ts-expect-error
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
