import Link from "next/link"

const Intro = () => {
  return (
    <section className="relative z-10 flex flex-col items-start my-16 text-left md:flex-row md:items-center md:justify-between md:mb-12 md:my-32">
      <div className="relative w-2/3 h-16">
        <h1 className="intro-title dark:text-gray-100 text-7xl font-bold tracking-tighter leading-tight opacity-0 animate-fade-in-up-30 md:pr-8 md:text-8xl">
          ndom91.
        </h1>
      </div>
      <div
        className="mt-5 w-full text-left dark:text-gray-200 text-gray-800 text-lg font-light tracking-tight leading-8 opacity-0 animate-fade-in-up-500 md:pl-8 md:w-11/12 md:text-xl"
        style={{ lineHeight: "2.25rem" }}
      >
        Hi 👋 my name is Nico Domino and during the day, I&lsquo;m a full-stack
        javascript developer at{" "}
        <a
          href="https://checklyhq.com"
          target="_blank"
          className="border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300 transition-all duration-500"
          rel="noreferrer"
        >
          Checkly
        </a>{" "}
        🦝. In the evenings you can find me working on open source software,
        like{" "}
        <a
          className="border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300 transition-all duration-500"
          href="https://next-auth.js.org"
          target="_blank"
          rel="noreferrer"
        >
          NextAuth.js
        </a>
        , or catching up on the latest Netflix series. I&lsquo;m based in
        Frankfurt, Germany where I occasionally write about my adventures in
        tech on my{" "}
        <Link href="/blog">
          <a className="border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300 transition-all duration-500">
            blog
          </a>
        </Link>{" "}
        📓 and if you like memes, movies, and web development you might also
        enjoy following me on{" "}
        <a
          href="https://twitter.com/ndom91"
          target="_blank"
          rel="noopener noreferer noreferrer"
          className="border-underline-grow bg-gradient-to-r dark:from-palevioletred from-pink-300 dark:to-palevioletred to-pink-300 transition-all duration-500"
        >
          Twitter
        </a>{" "}
        🐦.
      </div>
    </section>
  )
}

export default Intro
