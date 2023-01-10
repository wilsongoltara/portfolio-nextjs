import links from '@lib/links';
import Icon from './Icon';
import Menu from './Menu';

const NavBar = () => {
  return (
    <header className='size-box flex justify-between items-center h-15'>
      <Icon />
      <Menu links={links} />
    </header>
  );
};

export default NavBar;
