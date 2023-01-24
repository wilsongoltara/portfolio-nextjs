import NextLink from 'next/link';
import {LinkProps} from '@interfaces/interfaceProps';

export default function Link({ href, children, className, ...props}: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <a className={className} {...props} target='_blank'>{children}</a>
    </NextLink>
  );
}