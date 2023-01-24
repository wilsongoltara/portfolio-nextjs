import me from '@assets/me.jpg';
import ContentAboutMe from '@components/global/ContentAboutMe';
import { AppContext } from '@components/Layout';
import stacks from '@lib/stacks';
import Head from 'next/head';
import { useContext } from 'react';

export default function About() {
  const { nav } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>About me</title>
        <meta name='description' content='About me' key='desc' />
      </Head>
      <section className={`flex justify-center ${nav ? 'hidden': null}`}>
        <ContentAboutMe hrefImage={me} stacks={stacks} />
      </section>
    </>
  );
}
