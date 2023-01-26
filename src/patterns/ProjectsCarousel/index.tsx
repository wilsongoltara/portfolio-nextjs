import {projects} from '@lib/projects';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@components/Card';

const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

export default function ProjectsCarousel() {

  return (
    <Carousel
      className='max-w-2xl min-w-[320px]'
      emulateTouch
      centerMode
      selectedItem={1}
      showArrows
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderItem={customRenderItem}
    >
      {projects.map(({description, link, nameProject, pathImage}) => (
        <Card
          key={nameProject}
          description={description}
          link={link}
          nameProject={nameProject}
          pathImage={pathImage}
        />
      ))}
    </Carousel>
  );
}
