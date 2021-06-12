import Link from "next/link"

const Navbar = () => {
  return (
    <div className="py-4">
      <ul className="w-full flex space-x-10 text-xl font-thin">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
