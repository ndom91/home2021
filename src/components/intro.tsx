import { useEffect } from "react"
import dynamic from "next/dynamic"
import setFlickerAnimation from "../lib/flicker"
import Torus from "@/components/torus"
import useStore from "../lib/zustand"
const IntroDescription = dynamic(() => import("./intro-description"), {
  ssr: false,
})

const Intro = () => {
  const theme = useStore((state) => state.theme)

  useEffect(() => {
    setFlickerAnimation()
  }, [])

  return (
    <section className="relative my-16 flex flex-col items-start text-left lg:my-[16vh] lg:flex-row lg:items-center lg:justify-between">
      <Torus key={theme} />
      <IntroDescription />
    </section>
  )
}

export default Intro
