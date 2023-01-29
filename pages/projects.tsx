import {AppContext} from '@infra/context/AppContext';
import {useContext} from 'react';
import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';
import dynamic from 'next/dynamic';

const ProjectsCarousel = dynamic(() => import('@patterns/ProjectsCarousel'));

export default function Projects() {
  const { nav } = useContext(AppContext);

  return (
    <Transition>
      <section className={`${nav ? 'hidden' : null} flex flex-col items-center max-w-[90%]:`}>
        <PageTitle>Projects</PageTitle>
        <ProjectsCarousel />
      </section>
    </Transition>
  );
}
