import NextLink from 'next/link';
import {LinkProps} from '@interfaces/interfaceProps';

export default function Link({ href, children, ...props}: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}