import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
// import setFlickerAnimation from "../lib/flicker"
import createGlobe from "cobe"
import useStore from "../lib/zustand"
const IntroDescription = dynamic(() => import("./intro-description"), {
  ssr: false,
})

const Intro = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const theme = useStore((state) => state.theme)
  // const [phi, setPhi] = useState(0)
  let phi = 0
  useEffect(() => {
    // setFlickerAnimation()
    // let phi = 0
    let globe: any

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 1000,
        height: 1000,
        phi: 0,
        theta: 0,
        dark: 0,
        diffuse: 0.8,
        mapSamples: 26000,
        mapBrightness: 9,
        baseColor: theme === "dark" ? [0.05, 0.078, 0.1059] : [0.9, 0.9, 0.9],
        markerColor: [1, 0.5, 1],
        glowColor: theme === "dark" ? [0.1, 0.1, 0.1] : [0.8, 0.8, 0.8],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi
          phi += 0.002
          // setPhi(phi => phi + 0.002)
          // state.phi = phi + 0.002
        },
      })
    }
    return () => {
      globe.destroy()
    }
  }, [theme, phi])

  return (
    <section className="relative z-10 my-16 flex flex-col items-start text-left lg:my-[20vh] lg:flex-row lg:items-start lg:justify-start">
      <div className="relative h-16 w-2/3">
        {/* <h1 className="js_darkmode_flicker intro-title animate-fade_in_up_30 pl-4 font-sans text-7xl font-extrabold leading-tight tracking-tighter opacity-0 dark:text-gray-100 lg:pl-0 lg:pr-8 lg:text-8xl"> */}
        {/*   ndom91. */}
        {/* </h1> */}
        <canvas
          ref={canvasRef}
          style={{ width: "500px", height: "500px" }}
        ></canvas>
      </div>
      <IntroDescription />
    </section>
  )
}

export default Intro
