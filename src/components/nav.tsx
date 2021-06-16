import Link from "next/link"
import DarkToggle from "@/components/dark-toggle"

const Navbar = () => {
  return (
    <nav className="space-between flex p-4 opacity-0 animate-fade-in">
      <ul className="flex w-full dark:text-gray-100 text-gray-800 text-xl font-thin space-x-10">
        <li>
          <Link href="/">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 focus:border-b-8 dark:border-palevioletred border-pink-300 focus:outline-none outline-none transition-all duration-500">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 focus:border-b-8 dark:border-palevioletred border-pink-300 focus:outline-none outline-none transition-all duration-500">
              Blog
            </a>
          </Link>
        </li>
      </ul>
      <DarkToggle />
      <audio
        src="/assets/toggle-off.mp3"
        id="js-sound-off"
        preload="auto"
        hidden
      ></audio>
      <audio
        src="/assets/toggle-on.mp3"
        id="js-sound-on"
        preload="auto"
        hidden
      ></audio>
    </nav>
  )
}
export default Navbar
