import Link from 'next/link';

const Copyright = () => {
  return (
    <article className='p-2'>
      <span>
        WG &copy; 2022 by
        <Link
          href='https://github.com/wilsongoltara'
          rel='noopener noreferrer'
        >
          <a target='_blank' className="ml-1">Wilson S. Goltara</a>
        </Link>
      </span>
    </article>
  );
};

export default Copyright;
