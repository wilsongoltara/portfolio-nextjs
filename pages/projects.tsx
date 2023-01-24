import ProjectsCarousel from '../src/infra/components/global/Carousel';
import { AppContext } from '@components/Layout';
import Head from 'next/head';
import { useContext } from 'react';

export default function Projects(){
  const { nav } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects development" />
      </Head>
      <section className={`${nav ? 'hidden' : null} flex flex-col items-center`}>
        <ProjectsCarousel />
      </section>
    </>
  );
}
