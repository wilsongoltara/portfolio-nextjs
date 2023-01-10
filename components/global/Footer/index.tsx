import icons from '@lib/icons';
import Copyright from './Copyright';
import Shared from './Shared';

export default function Footer() {
  return (
    <footer className='size-box'>
      <div className='flex justify-center items-center md:justify-between'>
        <Copyright />
        <Shared icons={icons} />
      </div>
    </footer>
  );
}
