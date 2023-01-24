import Link from '../../components/Link';
import {CopyrightProps} from '@interfaces/interfaceProps';

export default function Copyright({nameCopy, nameLink, href, year}: CopyrightProps) {
  return (
    <article>
      <span className="p-2">
        {`${nameCopy}© ${year} by`}
        <Link
          href={href}
          className="ml-1"
          target="_blank"
        >
          {nameLink}
        </Link>
      </span>
    </article>
  );
}
