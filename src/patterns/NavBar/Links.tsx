import {LinksProps} from '@interfaces/interfaceProps';
import Link from '../../components/Link';

export default function Links({
  links,
  classList,
  classItem,
  onClick,
}: LinksProps) {
  return (
    <ul className={classList}>
      {links.map(({ link, href }, index) => (
        <li key={index} className={classItem} onClick={onClick}>
          <Link href={href}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
