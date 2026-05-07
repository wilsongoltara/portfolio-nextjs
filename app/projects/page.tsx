'use client';

import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';
import ProjectsCarousel from '@patterns/ProjectsCarousel';

export default function ProjectsPage() {
  return (
    <Transition>
      <PageTitle>Projects</PageTitle>
      <section className="flex flex-col items-center">
        <ProjectsCarousel />
      </section>
    </Transition>
  );
}

