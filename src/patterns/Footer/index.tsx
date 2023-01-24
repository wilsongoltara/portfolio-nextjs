import {iconsFooter} from '@lib/iconsFooter';
import Copyright from './Copyright';
import Icons from '@components/Icons';

export default function Footer() {
  return (
    <footer className='size-box'>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
        <Copyright nameCopy="WG" nameLink="Wilson S. Goltara" year="2022" href="/"/>
        <Icons icons={iconsFooter} classList="flex justify-between items-center"/>
      </div>
    </footer>
  );
}
