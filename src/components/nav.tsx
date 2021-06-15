import Link from "next/link"
import DarkToggle from "@/components/dark-toggle"

const Navbar = () => {
  return (
    <nav className="space-between flex p-4">
      <ul className="flex w-full dark:text-gray-100 text-gray-800 text-xl font-thin space-x-10">
        <li>
          <Link href="/">
            <a className="dark:focus:ring-opacity-10 dark:focus:ring-pink-500 p-0.5 dark:text-gray-100 text-gray-800 rounded focus:outline-none transition-shadow duration-500 focus:ring-pink-400 focus:ring-opacity-30 focus:ring-4">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="dark:focus:ring-opacity-10 dark:focus:ring-pink-500 p-0.5 dark:text-gray-100 text-gray-800 rounded focus:outline-none transition-shadow duration-500 focus:ring-pink-400 focus:ring-opacity-30 focus:ring-4">
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
