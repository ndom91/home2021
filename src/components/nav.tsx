import Link from 'next/link'
import dynamic from 'next/dynamic'

const DarkToggle = dynamic(() => import('@/components/dark-toggle'))

const Navbar = () => {
  return (
    <nav className="flex animate-fade_in py-4 opacity-0 max-w-7xl mx-auto w-full">
      <ul className="flex w-full items-center space-x-10 font-mono text-xl font-extralight text-gray-800 dark:text-gray-100">
        <li>
          <Link
            href="/"
            className="p-0.5 font-light text-gray-800 outline-none  transition-all duration-200 focus:outline-none dark:text-gray-100"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="p-0.5 font-light text-gray-800 outline-none  transition-all duration-200 focus:outline-none dark:text-gray-100"
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="p-0.5 font-light text-gray-800 outline-none  transition-all duration-200 focus:outline-none dark:text-gray-100"
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
