import {linksNavBar} from '@lib/linksNavBar';
import Icon from '@components/Icon';
import dynamic from 'next/dynamic';

const Menu = dynamic(() => import('./Menu'));

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
