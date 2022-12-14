import Link from 'next/link';

const Icon = () => {
  return (
    <div className='p-2 hover:text-gray-200 hover:scale-105'>
      <Link href='/'>
        <span className='text-3xl cursor-pointer'>WG</span>
      </Link>
    </div>
  );
};

export default Icon;
