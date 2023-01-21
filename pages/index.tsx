import Hero from '@components/global/Hero';
import { dataHero } from '@lib/hero';
import Head from 'next/head';

export default function Home() {
  const { prefix, name, describe } = dataHero;

  return (
    <>
      <Head>
        <title>Wilson Goltara</title>
        <meta
          name='description'
          content='Full-stack developer, JavaScript enthusiast, and course creator'
          key='desc'
        />
        <meta name="keywords" content="Wilson, Goltara, Full Stack, Developer, Portfolio, Web developer" />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/assets/meta.jpg' />
        <meta property='og:title' content='Wilson Goltara' />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="apple-touch-icon" href="/assets/me.png"></link>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero prefix={prefix} name={name} describe={describe} />
    </>
  );
}
