import Link from "next/link"
import dynamic from "next/dynamic"

const DarkToggle = dynamic(() => import("@/components/dark-toggle"))

const Navbar = () => {
  return (
    <nav className="flex py-8 w-full max-w-7xl opacity-0 animate-fade_in">
      <ul className="flex items-center space-x-10 w-full font-mono text-xl font-extralight text-gray-800 dark:text-gray-100">
        <li>
          <Link
            href="/"
            className="p-0.5 font-light text-gray-800 transition-all duration-200 outline-none dark:text-gray-100 focus:outline-none"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="p-0.5 font-light text-gray-800 transition-all duration-200 outline-none dark:text-gray-100 focus:outline-none"
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="p-0.5 font-light text-gray-800 transition-all duration-200 outline-none dark:text-gray-100 focus:outline-none"
          >
            work
          </Link>
        </li>
      </ul>
      <DarkToggle />
    </nav>
  )
}
export default Navbar
