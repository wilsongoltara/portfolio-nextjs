import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Full-stack developer, JavaScript enthusiast, and course creator'
          key='desc'
        />
        <meta name="keywords" content="Wilson, Goltara, Full Stack, Developer, Portfolio, Web developer" />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/meta.jpg' />
        <meta property='og:title' content='Wilson Goltara' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="googlebot" content="index, follow" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}