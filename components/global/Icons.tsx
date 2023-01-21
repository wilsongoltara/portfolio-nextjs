import { IconProps } from '@interfaces/props';
import NextLink from 'next/link';

export default function Icons({ icons, classList }: IconProps) {
  return (
    <article className=''>
      <ul className={classList}>
        {icons.map(({ name, href, Icon }, index) => (
          <li key={index} className='cursor-pointer p-3' about='auto'>
            <NextLink href={href}>
              <a target='_blank'>
                <Icon color='gray-400' title={name}/>
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </article>
  );
}
