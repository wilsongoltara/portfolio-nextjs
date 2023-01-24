import ProjectsCarousel from '../src/patterns/Carousel';
import { AppContext } from '@components/Layout';
import { useContext } from 'react';

export default function Projects(){
  const { nav } = useContext(AppContext);

  return (
    <section className={`${nav ? 'hidden' : null} flex flex-col items-center`}>
      <ProjectsCarousel />
    </section>
  );
}
