import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
    return (
        <nav className="">
            {/* LEFT */}
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="TrendLama" width={36} height={36} className="w-6 h-6 md:w-9 h-9"></Image>
              <p className="text-md font-medium tracking-wider">TrendLama</p>
            </Link>
            {/* RIGHT */}
        </nav>
    )
}

export default NavBar