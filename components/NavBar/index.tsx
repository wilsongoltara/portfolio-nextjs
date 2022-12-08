import links from "./utils/links";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {
  Link,
} from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="flex justify-between items-center w-full h-20 text-white fixed p-10 max-[380px]:bg-black">
      <div className="pl-5">
        <h1 className="text-4xl ml-2">WG</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, href }, index) => (
          <li
            key={index}
            className="px-10 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105"
          >
            <Link
              to={href}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

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
                to={href}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
