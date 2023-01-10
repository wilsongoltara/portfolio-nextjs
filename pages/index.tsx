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
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero prefix={prefix} name={name} describe={describe} />
    </>
  );
}
