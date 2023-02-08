import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';
import dynamic from 'next/dynamic';

const ProjectsCarousel = dynamic(() => import('@patterns/ProjectsCarousel'));

export default function Projects() {
  return (
    <Transition>
      <PageTitle>Projects</PageTitle>
      <section className='flex flex-col items-center'>
        <ProjectsCarousel />
      </section>
    </Transition>
  );
}
