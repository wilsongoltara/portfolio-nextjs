import { IconProps } from '@interfaces/props';
import NextLink from 'next/link';

export default function Shared({ icons }: IconProps) {
  return (
    <article className='hidden md:block'>
      <ul className='flex justify-between items-center'>
        {icons.map(({ href, Icon }, index) => (
          <li key={index} className='cursor-pointer p-5'>
            <NextLink href={href}>
              <a target='_blank'>
                <Icon color='gray' />
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </article>
  );
}
