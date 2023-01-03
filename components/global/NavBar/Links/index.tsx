import NextLink from 'next/link';
import { LinksProps } from '../../../../intefaces/intefaces';

export default function Links({ links, classList, classItem, onClick }: LinksProps) {
  return (
    <ul className={classList}>
      {links.map(({ link, href }, index) => (
        <li key={index} className={classItem} onClick={onClick}>
          <NextLink href={href}>{link}</NextLink>
        </li>
      ))}
    </ul>
  );
}
