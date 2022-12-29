import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wilson Goltara</title>
        <meta name='description' content='Full-stack developer, JavaScript enthusiast, and course creator.' />
        <meta property='og:type' content='website'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero /> 
    </>
  );
};

export default Home;
