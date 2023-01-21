import ContentAboutMe from '@components/global/ContentAboutMe';
import Head from 'next/head';
import { AppContext } from '@components/layout';
import { useContext } from 'react';

export default function About() {
  const { nav } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>About me - Build</title>
        <meta name='description' content='About me' key='desc' />
      </Head>
      <section className={`flex justify-center ${nav ? 'hidden': null}`}>
        <ContentAboutMe />
      </section>
    </>
  );
}
