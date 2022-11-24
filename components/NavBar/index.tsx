import links from "./utils/links";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-20 text-white fixed">
      <div>
        <h1 className="text-4xl ml-2">WG</h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-10 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105"
          >
            {link}
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
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-400">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
