import links from '@infra/lib/links';
import Icon from './Icon';
import Menu from './Menu';

export default function NavBar() {
  return (
    <header className='size-box'>
      <nav className='flex justify-between items-center'>
        <Icon />
        <Menu links={links} />
      </nav>
    </header>
  );
}
