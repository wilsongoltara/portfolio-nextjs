import icons from '@infra/lib/icons';
import Copyright from './Copyright';
import Icons from '@components/Icons';

export default function Footer() {
  return (
    <footer className='size-box'>
      <div className='flex flex-col justify-center items-center md:flex-row md:justify-between'>
        <Copyright />
        <Icons icons={icons} classList='flex justify-between items-center' />
      </div>
    </footer>
  );
}
