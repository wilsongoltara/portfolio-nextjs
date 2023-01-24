import {AppContext} from '@components/Layout';
import {MenuProps} from '@interfaces/interfaceProps';
import {useContext} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Links from './Links';

export default function Menu({ links }: MenuProps) {
  const { nav, setNav } = useContext(AppContext);
  
  return (
    <menu>
      <div>
        <Links links={links} classList='hidden md:flex' classItem='item' />
      </div>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-2 md:hidden'
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <Links
          links={links}
          classList='burger-menu'
          classItem='item py-5 text-3xl'
          onClick={() => setNav(!nav)}
        />
      )}
    </menu>
  );
}
