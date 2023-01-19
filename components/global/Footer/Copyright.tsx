import NextLink from 'next/link';

export default function Copyright() {
  return (
    <article>
      <span className='p-2'>
        WG &copy; 2022 by
        <NextLink
          href='https://github.com/wilsongoltara'
          rel='noopener noreferrer'
        >
          <a target='_blank' className='ml-1'>
            Wilson S. Goltara
          </a>
        </NextLink>
      </span>
    </article>
  );
}
