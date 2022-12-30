import { Link } from 'lib/links';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Links from '../Links';

export interface MenuProps {
  links: Link[];
}

export default function Menu({ links }: MenuProps) {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div>
        <Links
          links={links}
          classList='hidden md:flex'
          classItem='px-5 cursor-pointer font-medium text-gray-400 hover:scale-105 hover:text-gray-100'
        />
      </div>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-5 z-10 text-gray-400 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <Links
          links={links}
          classList='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'
          classItem='px-4 cursor-pointer capitalize py-6 text-3xl'
          onClick={() => setNav(!nav)}
        />
      )}
    </>
  );
}
