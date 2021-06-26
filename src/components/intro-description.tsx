import { useState, useEffect } from "react"
import Link from "next/link"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"
const mql = require("@microlink/mql")

const IntroDescription = () => {
  const [screenshots, setScreenshots] = useState({
    checkly: "",
    twitter: "",
    blog: "",
    nextauth: "",
  })
  const [linkScreenshots, setLinkScreenshots] = useState({
    checkly: false,
    twitter: false,
    blog: false,
    nextauth: false,
  })
  useEffect(() => {
    typeof document !== "undefined" && Splitting()
  }, [])

  const fetchImage = async (url: string, site: string) => {
    const { status, data } = await mql(url, {
      screenshot: true,
      meta: false,
      overlay: {
        background: "#fff",
        browser: "dark",
      },
    })
    setLinkScreenshots({ ...linkScreenshots, [site]: true })
    if (status === "success") {
      setScreenshots({ ...screenshots, [site]: data.screenshot.url })
    }
  }

  return (
    <div
      id="intro-body"
      data-splitting="lines"
      className="relative w-full p-2 mt-4 text-lg font-light leading-8 tracking-tight text-left text-gray-800 dark:text-gray-200 md:pl-10 md:w-11/12 md:text-xl"
      style={{ lineHeight: "2.25rem" }}
    >
      Hi! My name&apos;s Nico Domino and I&lsquo;m a full-stack javascript
      developer at{" "}
      {linkScreenshots.checkly && (
        <div className="absolute z-10 w-32 h-32 rounded-md pointer-events-none -top-12 left-32 animate animate-fade-in-up-5">
          <img
            src={screenshots.checkly}
            alt="Checkly Screenshot"
            className="rounded-md shadow-xl"
          />
        </div>
      )}
      <a
        href="https://checklyhq.com"
        target="_blank"
        onMouseEnter={() => fetchImage("https://checklyhq.com", "checkly")}
        onMouseOut={() =>
          setLinkScreenshots({
            ...linkScreenshots,
            checkly: false,
          })
        }
        className="transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300"
        rel="noreferrer"
      >
        Checkly
      </a>{" "}
      🦝. In the evenings you can find me working on open source software, like{" "}
      {linkScreenshots.nextauth && (
        <div className="absolute z-10 w-32 h-32 rounded-md pointer-events-none -top-4 right-[5.2rem] animate animate-fade-in-up-5">
          <img
            src={screenshots.nextauth}
            alt="Checkly Screenshot"
            className="rounded-md shadow-xl"
          />
        </div>
      )}
      <a
        onMouseEnter={() => fetchImage("https://next-auth.js.org", "nextauth")}
        onMouseOut={() =>
          setLinkScreenshots({
            ...linkScreenshots,
            nextauth: false,
          })
        }
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
      {linkScreenshots.blog && (
        <div className="absolute z-10 w-32 h-32 rounded-md pointer-events-none top-24 left-56 animate animate-fade-in-up-5">
          <img
            src={screenshots.blog}
            alt="Checkly Screenshot"
            className="rounded-md shadow-xl"
          />
        </div>
      )}
      <Link href="/blog">
        <a
          onMouseEnter={() => fetchImage("https://ndo.dev/blog", "blog")}
          onMouseOut={() =>
            setLinkScreenshots({
              ...linkScreenshots,
              blog: false,
            })
          }
          className="transition-all duration-500 border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300"
        >
          blog
        </a>
      </Link>{" "}
      📓 and if you like memes, movies, and web development you might also enjoy
      following me on{" "}
      {linkScreenshots.twitter && (
        <div className="absolute z-10 w-32 h-32 rounded-md pointer-events-none bottom-2 left-[9.5rem] animate animate-fade-in-up-5">
          <img
            src={screenshots.twitter}
            alt="Checkly Screenshot"
            className="rounded-md shadow-xl"
          />
        </div>
      )}
      <a
        href="https://twitter.com/ndom91"
        onMouseEnter={() => fetchImage("https://twitter.com/ndom91", "twitter")}
        onMouseOut={() =>
          setLinkScreenshots({
            ...linkScreenshots,
            twitter: false,
          })
        }
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
