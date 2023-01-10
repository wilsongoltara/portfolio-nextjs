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
      </Head>
      <section className={`${nav ? 'hidden' : null}`}>
        <FeatureCarousel />
      </section>
    </>
  );
};

export default Projects;
