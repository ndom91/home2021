import { useEffect } from "react"
import ScreenshotLink from "@/components/screenshot-link"

const IntroDescription = () => {
  useEffect(() => {
    ; (async () => {
      const Splitting = (await import("splitting")).default
      Splitting()
    })()
  }, [])

  return (
    <div
      id="intro-body"
      data-splitting="lines"
      className="relative p-2 mt-4 w-full text-lg font-thin text-left text-gray-800 md:text-xl lg:pl-10 lg:w-11/12 dark:text-gray-100 font-victor leading-[2.75rem]"
    >
      Hey visitor 👋 My name&apos;s Nico Domino and I&lsquo;m a senior fullstack web developer
      currently looking for
      <ScreenshotLink url="/assets/ndomino_fullstack.pdf" image="resume.jpg">
        a new gig
      </ScreenshotLink>
      📝. You can also find me working on open source software, like{" "}
      <ScreenshotLink url="https://authjs.dev" image="authjs.jpg">
        Auth.js
      </ScreenshotLink>
      🔐, or catching up on the latest Netflix series. I&lsquo;m based in Berlin, Germany where I
      occasionally write about my adventures in tech on my{" "}
      <ScreenshotLink url="/blog" image="blog.jpg">
        blog
      </ScreenshotLink>
      📓 and if you like memes, movies, and web development you might also enjoy following me on{" "}
      <ScreenshotLink url="https://twitter.com/ndom91" image="twitter.jpg">
        Twitter
      </ScreenshotLink>
      🐦
    </div>
  )
}

export default IntroDescription