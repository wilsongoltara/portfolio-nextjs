import links from "../lib/links";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="text-gray-100 p-5">
      <nav className="flex justify-between items-center w-full h-20">
        <div className="p-5">
          <h1 className="text-4xl ml-2">WG</h1>
        </div>
        <div>
          <ul className="hidden md:flex">
            {links.map(({ link, href }, index) => (
              <li
                key={index}
                className="px-10 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-100"
              >
                <Link
                  href={href}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-5 z-10 text-gray-400 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
            {links.map(({ link, href }, index) => (
              <li
                key={index}
                className="px-4 cursor-pointer capitalize py-6 text-3xl"
              >
                <Link
                  href={href}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
