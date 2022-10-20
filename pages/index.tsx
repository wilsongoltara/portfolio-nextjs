import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wilson Goltara</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex justify-center items-center h-full w-full'>
        <h1 className='text-3xl font-bold'>Hello, Portfolio</h1>
      </main>
    </>
  );
};

export default Home;
