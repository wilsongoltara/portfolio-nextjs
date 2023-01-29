import Links from '@components/Links';
import { AppContext } from '@infra/context/AppContext';
import { MenuProps } from '@interfaces/interfaceProps';
import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Menu({ links }: MenuProps) {
  const { nav, setNav } = useContext(AppContext);
  
  return (
    <menu>
      <div>
        <Links links={links} classList="hidden md:flex" classItem="item"/>
      </div>
      <div
        onClick={() => setNav((nav) => !nav)}
        className="cursor-pointer pr-2 md:hidden"
      >
        {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
      </div>
      {nav && (
        <>
          <m.div
            initial={{ x: '100%' }}
            animate={{
              x: '30%'
            }}
            exit={{
              x: '100%'
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
            className="fixed bg-gray-600 shadow-lg top-20 right-0 w-full max-w-xs h-2/6 p-5"
          >
            <Links
              links={links}
              classItem="text-gray-200 py-4 text-2xl"
              onClick={() => setNav((nav) => !nav)}
            />
          </m.div>
        </>
      )}
    </menu>
  );
}
