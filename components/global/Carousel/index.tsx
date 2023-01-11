import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';

export default function FeatureCarousel() {
  return (
    <Carousel
      showIndicators={false}
      showArrows
      showStatus={false}
      emulateTouch
      infiniteLoop
      className='w-5/6 max-w-2xl'
    >
      <Card />
      <Card />
      <Card />
    </Carousel>
  );
}
