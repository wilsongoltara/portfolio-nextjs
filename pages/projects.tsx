import FeatureCarousel from '@components/global/Carousel';
import { AppContext } from '@components/layout';
import { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

const Projects: NextPage = () => {
  const { nav } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Projects - Build</title>
        <meta name="description" content="Projects developement" />
      </Head>
      <section className={`${nav ? 'hidden' : null} flex flex-col items-center grow`}>
        <FeatureCarousel />
      </section>
    </>
  );
};

export default Projects;
