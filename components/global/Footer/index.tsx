import Copyright from './Copyright';
import Shared from './Shared';

const Footer = () => {
  return (
    <footer className='text-gray-500 body-font px-10 py-5'>
      <div className='flex justify-center md:justify-between md:items-center'>
        <Copyright />
        <Shared />
      </div>
    </footer>
  );
};

export default Footer;
