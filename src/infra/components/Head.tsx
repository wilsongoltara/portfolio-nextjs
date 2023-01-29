import { ChildrenProps } from '@interfaces/interfaceProps';
import NextHead from 'next/head';

export default function Head({children}: ChildrenProps) {
  return (
    <NextHead>
      <title>{children}</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
      <meta property="og:title" content="Wilson Goltara"/>
      <meta
        name="description"
        content="Full-stack developer, JavaScript enthusiast, and course creator"
        key="desc"
      />
      <meta name="keywords" content="Wilson, Goltara, Wilson Goltara, Full Stack, Developer, Portfolio, Web developer"/>
      <meta property='og:site_name' content='Wilson Goltara Portfolio' />
      <meta property="og:type" content="website"/>
      <meta property="og:theme-color" content="dark"/>
      <meta property='og:url' content='https://wilsongoltara.me' />
      <meta property="og:image" content="/meta.webp"/>
      <meta name="robots" content="index, follow"/>
    </NextHead>
  );
}