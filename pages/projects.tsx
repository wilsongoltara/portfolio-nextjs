import FeatureCarousel from 'components/Carousel';
import { NextPage } from 'next';
import Head from 'next/head';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Build</title>
      </Head>
      <section>
        <div className='mx-auto flex items-center justify-center flex-col'>
          <div className='flex flex-col items-center justify-center text-center w-6/12'>
            <FeatureCarousel />
            {/* <div className='max-w-sm max-h-64'>
              <Image
                className='object-cover object-center rounded'
                alt='project'
                width='150'
                height='150'
                src={project1}

            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
