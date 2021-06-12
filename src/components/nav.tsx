import Link from "next/link"
import DarkToggle from "./darkToggle"

const Navbar = () => {
  return (
    <div className="space-between flex py-4">
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
    </div>
  )
}
export default Navbar
