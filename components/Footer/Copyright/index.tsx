import Link from 'next/link';

const Copyright = () => {
  return (
    <article className='p-2'>
      <span>
        WG &copy; 2022 by
        <Link
          href='https://github.com/goltarawilson'
          rel='noopener noreferrer'
          target='_blank'
        >
          <span className="ml-1">Wilson S. Goltara</span>
        </Link>
      </span>
    </article>
  );
};

export default Copyright;
