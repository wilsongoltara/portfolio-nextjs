import {IconProps} from '@interfaces/interfaceProps';
import Link from '@components/Link';

export default function Icons({ icons, classList }: IconProps) {
  return (
    <article>
      <ul className={classList}>
        {icons.map(({ name, href, Icon }, index) => (
          <li key={index} className='cursor-pointer p-3'>
            <Link href={href} target='_blank'>
              <Icon color='gray-400' title={name} />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
