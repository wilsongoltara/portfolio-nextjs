import InBuild from 'components/global/InBuild';
import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me - Build</title>
      </Head>
      <InBuild />
    </>
  );
};

export default About;
