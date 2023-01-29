import {IconsProps} from '@interfaces/interfaceProps';
import Link from '@components/Link';

export default function Icons({ icons, classList }: IconsProps) {
  return (
    <article>
      <ul className={classList}>
        {icons.map(({name, href, IconComponent, id}) => (
          <li key={id} className="cursor-pointer p-3">
            <Link href={href} target="_blank">
              <IconComponent color="gray-400" title={name}/>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
