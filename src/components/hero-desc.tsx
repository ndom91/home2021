import ScreenshotLink from "@/components/screenshot-link"

const IntroDescription = () => (
  <div
    className="relative p-2 mt-4 w-full text-lg font-thin text-left text-gray-800 md:text-xl lg:pl-10 lg:w-11/12 dark:text-gray-100 font-mono leading-[2.75rem] animate-[var(--animation-fade-in-bloom)] text-balance"
    style={{ animationDuration: "500ms" }}
  >
    Hey there 👋 My name&apos;s Nico Domino and I&apos;m a software engineer. You can find me
    working on open source software, like{" "}
    <ScreenshotLink url="https://authjs.dev" image="authjs.jpg">
      Auth.js
    </ScreenshotLink>{" "}
    🔐, or catching up on the latest Netflix series. I&lsquo;m based in Berlin, Germany where I
    occasionally write about tech or electronics on my{" "}
    <ScreenshotLink url="/blog" image="blog.jpg">
      blog
    </ScreenshotLink>{" "}
    📓 and if you like memes, movies, and web dev you might also enjoy following me on{" "}
    <ScreenshotLink url="https://bsky.app/profile/ndo.dev" image="bsky.png">
      Bluesky
    </ScreenshotLink>{" "}
    🦋
  </div>
)

export default IntroDescription
