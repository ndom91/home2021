import { useEffect } from "react"
import Splitting from "splitting"
import ScreenshotLink from "@/components/screenshot-link"

const IntroDescription = () => {
  useEffect(() => {
    typeof document !== "undefined" && Splitting()
  }, [])

  return (
    <p
      id="intro-body"
      data-splitting="lines"
      className="relative z-20 mt-4 w-full p-2 text-left font-mono text-lg font-extralight leading-8 tracking-tight text-gray-800 dark:text-gray-100 md:text-xl lg:w-11/12 lg:pl-10"
      style={{ lineHeight: "2.25rem" }}
    >
      Hi! My name&apos;s Nico Domino and I&lsquo;m a full-stack javascript
      developer at{" "}
      <ScreenshotLink
        url="https://checklyhq.com?utm_source=ndom91&utm_medium=referral"
        text="Checkly"
        className="animation-delay-500 animate-fade_in_up opacity-0"
      />{" "}
      🦝. In the evenings you can find me working on open source software, like{" "}
      <ScreenshotLink
        url="https://next-auth.js.org?utm_source=ndom91"
        text="NextAuth.js"
        className="animation-delay-600 animate-fade_in_up opacity-0"
      />{" "}
      🔒, or catching up on the latest Netflix series. I&lsquo;m based in
      Frankfurt, Germany where I occasionally write about my adventures in tech
      on my{" "}
      <ScreenshotLink
        url="https://ndo.dev/blog"
        text="blog"
        className="animation-delay-900 animate-fade_in_up opacity-0"
      />{" "}
      📓 and if you like memes, movies, and web development you might also enjoy
      following me on{" "}
      <ScreenshotLink
        url="https://twitter.com/ndom91"
        text="Twitter"
        className="animation-delay-1100 animate-fade_in_up opacity-0"
      />{" "}
      🐦
    </p>
  )
}

export default IntroDescription
