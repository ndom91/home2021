import Link from "next/link"
import dynamic from "next/dynamic"
// import DarkToggle from "@/components/dark-toggle"

const DarkToggle = dynamic(() => import("@/components/dark-toggle"))

const Navbar = () => {
  return (
    <nav className="flex p-4 opacity-0 space-between animate-fade-in">
      <ul className="flex items-center w-full space-x-10 text-xl text-gray-800 dark:text-gray-100 font-extralight">
        <li>
          <Link href="/">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 font-light  focus:outline-none outline-none transition-all duration-200">
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 font-light  focus:outline-none outline-none transition-all duration-200">
              blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="p-0.5 dark:text-gray-100 text-gray-800 font-light  focus:outline-none outline-none transition-all duration-200">
              work
            </a>
          </Link>
        </li>
      </ul>
      <DarkToggle />
    </nav>
  )
}
export default Navbar
