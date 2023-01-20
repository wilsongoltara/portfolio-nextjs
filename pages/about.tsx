import ContentAboutMe from '@components/global/ContentAboutMe';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About me - Build</title>
        <meta name="description" content="About me" key="desc" />
      </Head>
      <section className='flex justify-center'>
        <ContentAboutMe />
      </section>
    </>
  );
}
