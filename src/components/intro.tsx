import Link from "next/link"

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-32 md:mb-12 z-10 relative">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        ndom91.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 font-thin">
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
      </h4>
    </section>
  )
}

export default Intro
