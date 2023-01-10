import { AppContext } from '@components/layout';
import { MenuProps } from '@interfaces/interfaces';
import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Links from './Links';

const Menu = ({ links }: MenuProps) => {
  const { nav, setNav } = useContext(AppContext);
  return (
    <nav>
      <div>
        <Links
          links={links}
          classList='hidden md:flex'
          classItem='item'
        />
      </div>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-5 z-10 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <Links
          links={links}
          classList='burger-menu'
          classItem='item capitalize py-6 text-3xl'
          onClick={() => setNav(!nav)}
        />
      )}
    </nav>
  );
};

export default Menu;
