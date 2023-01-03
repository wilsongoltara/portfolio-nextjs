import FeatureCarousel from '../components/global/Carousel';
import { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { AppContext } from 'components/layout';

const Projects: NextPage = () => {
  const { nav } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Projects - Build</title>
      </Head>
      <section className={nav ? 'hidden' : null}>
        <div className='mx-auto flex items-center justify-center flex-col'>
          <FeatureCarousel />
          {/* <div className='flex flex-col items-center justify-center text-center w-6/12'>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
