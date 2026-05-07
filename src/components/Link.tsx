import NextLink from 'next/link';
import { LinkProps } from '@interfaces/interfaceProps';

export default function Link({ href, children, ...props }: Readonly<LinkProps>) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}