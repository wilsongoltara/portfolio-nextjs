import Hero from '@components/global/Hero';
import { HeroProps } from '@interfaces/interfaces';
import type { NextPage } from 'next';
import Head from 'next/head';

const dataHero: HeroProps = {
  prefix: 'i am',
  name: 'wilson',
  describe: 'a web developer',
};

const Home: NextPage = () => {
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
};

export default Home;
