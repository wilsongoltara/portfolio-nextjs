import { ChildrenProps } from '@interfaces/interfaceProps';
import Head from 'next/head';

export default function PageTitle({ children }: ChildrenProps) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
}