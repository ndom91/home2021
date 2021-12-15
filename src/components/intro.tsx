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
    <section className="relative z-10 flex flex-col items-start my-16 text-left lg:flex-row lg:items-center lg:justify-between lg:my-[20vh]">
      <div className="relative w-2/3 h-16">
        <h1 className="pl-4 font-extrabold font-sans leading-tight tracking-tighter opacity-0 js_darkmode_flicker text-7xl intro-title dark:text-gray-100 animate-fade_in_up_30 lg:pl-0 lg:pr-8 lg:text-8xl">
          ndom91.
        </h1>
      </div>
      <IntroDescription />
    </section>
  )
}

export default Intro
