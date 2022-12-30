import Link from 'next/link';
import links from '../lib/links';
import Menu from './Menu';

const NavBar = () => {
  return (
    <header className='px-10 py-5 w-full'>
      <nav className='flex justify-between items-center h-15'>
        <div className='p-2 text-gray-400 hover:text-gray-100 hover:scale-105'>
          <Link href='/'>
            <span className='text-3xl cursor-pointer'>WG</span>
          </Link>
        </div>
        <Menu links={links} />
      </nav>
    </header>
  );
};

export default NavBar;
