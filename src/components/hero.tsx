import { useEffect } from "react"
import setFlickerAnimation from "@/lib/flicker"
import HeroDescription from "@/components/hero-desc"

const Hero = () => {
  useEffect(() => {
    setFlickerAnimation()
  }, [])

  return (
    <section className="flex relative z-10 flex-col items-start my-16 max-w-7xl text-left lg:flex-row lg:justify-between lg:items-center lg:my-[20vh]">
      <div className="relative w-2/3 h-16">
        <h1 className="pl-2 font-sans text-9xl font-extrabold tracking-tighter leading-tight opacity-0 lg:pr-8 lg:pl-0 dark:text-gray-100 js_darkmode_flicker intro-title animate-fade_in_up_30 lg:text-10xl">
          ndom91.
        </h1>
      </div>
      <HeroDescription />
    </section>
  )
}

export default Hero