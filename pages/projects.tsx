import ProjectsCarousel from '@patterns/ProjectsCarousel';
import {AppContext} from '@infra/context/AppContext';
import {useContext} from 'react';
import PageTitle from '@components/PageTitle';

export default function Projects(){
  const { nav } = useContext(AppContext);

  return (
    <section className={`${nav ? 'hidden' : null} flex flex-col items-center max-w-[90%]:`}>
      <PageTitle>Projects</PageTitle>
      <ProjectsCarousel />
    </section>
  );
}
