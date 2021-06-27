import { useEffect } from "react"
import dynamic from "next/dynamic"
import setFlickerAnimation from "../lib/flicker"
const IntroDescription = dynamic(() => import("./intro-description"), {
  ssr: false,
})

const Intro = () => {
  useEffect(() => {
    setFlickerAnimation()
  }, [])

  return (
    <section className="relative z-10 flex flex-col items-start my-16 text-left md:flex-row md:items-center md:justify-between md:mb-12 md:my-32">
      <div className="relative w-2/3 h-16">
        <h1 className="pl-4 font-bold leading-tight tracking-tighter opacity-0 js-darkmode-flicker text-7xl intro-title dark:text-gray-100 animate-fade-in-up-30 md:pl-0 md:pr-8 md:text-8xl">
          ndom91.
        </h1>
      </div>
      <IntroDescription />
    </section>
  )
}

export default Intro
