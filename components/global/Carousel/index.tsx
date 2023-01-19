import { projects } from '@lib/projects';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';

export default function ProjectsCarousel() {
  return (
    <Carousel
      className='w-[90%] max-w-2xl min-w-[320px]'
      emulateTouch
      infiniteLoop
      showArrows
      showIndicators
      showStatus={false}
      showThumbs={false}
    >
      {projects.map(({ description, link, nameProject, pathProject }, index) => (
        <Card
          key={index}
          description={description}
          link={link}
          nameProject={nameProject}
          pathProject={pathProject}
        />
      ))}
    </Carousel>
  );
}
