import { useEffect } from "react"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"
import ScreenshotLink from "@/components/screenshot-link"

const IntroDescription = () => {
  useEffect(() => {
    typeof document !== "undefined" && Splitting()
  }, [])

  return (
    <div
      id="intro-body"
      data-splitting="lines"
      className="relative w-full p-2 mt-4 text-lg font-light leading-8 tracking-tight text-left text-gray-800 dark:text-gray-200 md:pl-10 md:w-11/12 md:text-xl"
      style={{ lineHeight: "2.25rem" }}
    >
      Hi! My name&apos;s Nico Domino and I&lsquo;m a full-stack javascript
      developer at{" "}
      <ScreenshotLink
        url="https://checklyhq.com"
        text="Checkly"
        className="opacity-0 animate-fade-in-up animation-delay-200"
      />
      🦝. In the evenings you can find me working on open source software, like{" "}
      <ScreenshotLink
        url="https://next-auth.js.org"
        text="NextAuth.js"
        className="opacity-0 animate-fade-in-up animation-delay-300"
      />
      , or catching up on the latest Netflix series. I&lsquo;m based in
      Frankfurt, Germany where I occasionally write about my adventures in tech
      on my{" "}
      <ScreenshotLink
        url="https://ndo.dev/blog"
        text="blog"
        className="opacity-0 animate-fade-in-up animation-delay-600"
      />
      📓 and if you like memes, movies, and web development you might also enjoy
      following me on{" "}
      <ScreenshotLink
        url="https://twitter.com/ndom91"
        text="Twitter"
        className="opacity-0 animate-fade-in-up animation-delay-800"
      />
      🐦.
    </div>
  )
}

export default IntroDescription
