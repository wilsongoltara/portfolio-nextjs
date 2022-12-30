import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import links from '../lib/links';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className='px-10 py-5 w-full'>
      <nav className='flex justify-between items-center h-15'>
        <div className='p-2 text-gray-400 hover:text-gray-100 hover:scale-105'>
          <Link href='/'>
            <span className='text-3xl cursor-pointer'>WG</span>
          </Link>
        </div>
        <div>
          <ul className='hidden md:flex'>
            {links.map(({ link, href }, index) => (
              <li
                key={index}
                className='px-5 cursor-pointer font-medium text-gray-400 hover:scale-105 hover:text-gray-100'
              >
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer pr-5 z-10 text-gray-400 md:hidden'
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
            {links.map(({ link, href }, index) => (
              <li
                key={index}
                className='px-4 cursor-pointer capitalize py-6 text-3xl'
              >
                <Link href={href}>{link}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
