import Link from "next/link"

const Intro = () => {
  return (
    <section className="relative z-10 flex flex-col items-center my-32 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-7xl font-bold tracking-tighter leading-tight md:pr-8 md:text-8xl">
        ndom91.
      </h1>
      <div
        className="mt-5 text-left dark:text-gray-400 text-gray-800 text-lg font-light tracking-tighter leading-8 md:pl-8 md:text-xl"
        style={{ lineHeight: "2.25rem" }}
      >
        During the day, I'm a full-stack javascript developer at{" "}
        <a href="https://checklyhq.com" target="_blank">
          Checkly
        </a>{" "}
        🦝. In the evenings you can find me working on open source software or
        catching up on the latest Netflix series. I'm based in Frankfurt,
        Germany where I occasionally write about my adventures in tech on my{" "}
        <Link href="/blog">blog</Link> 📓 and if you like memes, movies, and web
        development you might also enjoy following me on{" "}
        <a
          href="https://twitter.com/ndom91"
          target="_blank"
          rel="noopener noreferer"
        >
          Twitter
        </a>{" "}
        🐦.
      </div>
    </section>
  )
}

export default Intro
