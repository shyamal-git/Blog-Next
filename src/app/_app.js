// pages/_app.js
import Link from "next/link";
import "../stayles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <Link href="/" className="text-white mr-4">
          Home
        </Link>
        <Link href="/about" className="text-white mr-4">
          About
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
