import icons from '@lib/icons';
import Link from 'next/link';

const Shared = () => {
  return (
    <article className='hidden md:block'>
      <ul className='flex justify-between items-center'>
        {icons.map(({ href, Icon }, index) => (
          <li key={index} className='cursor-pointer p-5'>
            <Link href={href}>
              <a target='_blank'>
                <Icon color='gray' />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Shared;
