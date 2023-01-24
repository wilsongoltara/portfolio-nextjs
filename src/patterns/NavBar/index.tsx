import {linksNavBar} from '@lib/linksNavBar';
import Icon from '@components/Icon';
import Menu from './Menu';

export default function NavBar() {
  return (
    <header className='size-box'>
      <nav className='flex justify-between items-center'>
        <Icon href='/' nameIcon='WG'/>
        <Menu links={linksNavBar} />
      </nav>
    </header>
  );
}
