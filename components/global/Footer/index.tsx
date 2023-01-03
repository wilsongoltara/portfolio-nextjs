import Copyright from './Copyright';
import Shared from './Shared';

const Footer = () => {
  return (
    <footer className='px-10 py-5 text-gray-500 body-font'>
      <div className='flex justify-center md:justify-between md:items-center'>
        <Copyright />
        <Shared />
      </div>
    </footer>
  );
};

export default Footer;
