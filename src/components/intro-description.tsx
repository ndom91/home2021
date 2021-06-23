import { useEffect } from "react"
import Link from "next/link"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

const IntroDescription = () => {
  useEffect(() => {
    typeof document !== "undefined" && Splitting()
  }, [])

  return (
    <div
      id="intro-body"
      data-splitting="lines"
      className="w-full p-2 mt-4 text-lg font-light leading-8 tracking-tight text-left text-gray-800 dark:text-gray-200 md:pl-10 md:w-11/12 md:text-xl"
      style={{ lineHeight: "2.25rem" }}
    >
      Hi! My name&apos;s Nico Domino and I&lsquo;m a full-stack javascript
      developer at{" "}
      <a
        href="https://checklyhq.com"
        target="_blank"
        className="transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300"
        rel="noreferrer"
      >
        Checkly
      </a>{" "}
      🦝. In the evenings you can find me working on open source software, like{" "}
      <a
        className="transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300"
        href="https://next-auth.js.org"
        target="_blank"
        rel="noreferrer"
      >
        NextAuth.js
      </a>
      , or catching up on the latest Netflix series. I&lsquo;m based in
      Frankfurt, Germany where I occasionally write about my adventures in tech
      on my{" "}
      <Link href="/blog">
        <a className="transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300">
          blog
        </a>
      </Link>{" "}
      📓 and if you like memes, movies, and web development you might also enjoy
      following me on{" "}
      <a
        href="https://twitter.com/ndom91"
        target="_blank"
        rel="noopener noreferer noreferrer"
        className="transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300"
      >
        Twitter
      </a>{" "}
      🐦.
    </div>
  )
}

export default IntroDescription
