import { ChildrenProps } from '@interfaces/interfaceProps';
import NextHead from 'next/head';

export default function Head({children}: ChildrenProps) {
  return (
    <NextHead>
      <title>{children}</title>
      <meta
        name="description"
        content="Full-stack developer, JavaScript enthusiast, and course creator"
        key="desc"
      />
      <meta name="keywords" content="Wilson, Goltara, Wilson Goltara, Full Stack, Developer, Portfolio, Web developer"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="/meta.webp"/>
      <meta property="og:title" content="Wilson Goltara"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="googlebot" content="index, follow"/>
      <link rel="icon" href="/favicon.ico"/>
    </NextHead>
  );
}