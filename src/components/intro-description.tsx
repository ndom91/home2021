import { useEffect } from "react"
import Splitting from "splitting"
import ScreenshotLink from "@/components/screenshot-link"
import useStore from "../lib/zustand"

const IntroDescription = () => {
  useEffect(() => {
    typeof document !== "undefined" && Splitting()
  }, [])

  const setHoverText = useStore((state) => state.setHoverText)

  return (
    <div
      onMouseEnter={() => setHoverText(true)}
      onMouseLeave={() => setHoverText(false)}
      id="intro-body"
      data-splitting="lines"
      className="relative p-2 mt-4 w-full font-mono text-lg font-extralight tracking-tight leading-8 text-left text-gray-800 md:text-xl lg:pl-10 lg:w-11/12 dark:text-gray-100"
      style={{ lineHeight: "2.25rem" }}
    >
      Hi! My name&apos;s Nico Domino and I&lsquo;m a full-stack javascript developer at{" "}
      <ScreenshotLink
        url="https://checklyhq.com?utm_source=ndom91&utm_medium=referral"
        text="Checkly"
        className="opacity-0 animation-delay-500 animate-fade_in_up"
      />{" "}
      🦝. In the evenings you can find me working on open source software, like{" "}
      <ScreenshotLink
        url="https://next-auth.js.org?utm_source=ndom91"
        text="Auth.js"
        className="opacity-0 animation-delay-600 animate-fade_in_up"
      />{" "}
      🔒, or catching up on the latest Netflix series. I&lsquo;m based in Berlin, Germany where I
      occasionally write about my adventures in tech on my{" "}
      <ScreenshotLink
        url="https://ndo.dev/blog"
        text="blog"
        className="opacity-0 animation-delay-900 animate-fade_in_up"
      />{" "}
      📓 and if you like memes, movies, and web development you might also enjoy following me on{" "}
      <ScreenshotLink
        url="https://twitter.com/ndom91"
        text="Twitter"
        className="opacity-0 animation-delay-1100 animate-fade_in_up"
      />{" "}
      🐦
    </div>
  )
}

export default IntroDescription
