import Link from '@components/Link';

export default function Copyright() {
  return (
    <article>
      <span className='p-2'>
        WG &copy; 2022 by
        <Link
          href='https://github.com/wilsongoltara'
          className='ml-1'
        >
          Wilson S. Goltara
        </Link>
      </span>
    </article>
  );
}
