import {LinksProps} from '@interfaces/interfaceProps';
import Link from './Link';

export default function Links({
  links,
  classList,
  classItem,
  onClick,
}: LinksProps) {
  return (
    <ul className={classList}>
      {links.map(({link, href, id}) => (
        <li key={id} className={classItem} onClick={onClick}>
          <Link href={href}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
