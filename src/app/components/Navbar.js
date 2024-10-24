import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">247Blog</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link
            href="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/service"
            className="hover:text-blue-400 transition duration-300"
          >
            Service
          </Link>
          <Link
            href="/career"
            className="hover:text-blue-400 transition duration-300"
          >
            Career
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
