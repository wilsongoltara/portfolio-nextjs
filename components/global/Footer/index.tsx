import Copyright from './Copyright';
import Shared from './Shared';

const Footer = () => {
  return (
    <footer className='size-box'>
      <div className='flex justify-center md:justify-between md:items-center'>
        <Copyright />
        <Shared />
      </div>
    </footer>
  );
};

export default Footer;
