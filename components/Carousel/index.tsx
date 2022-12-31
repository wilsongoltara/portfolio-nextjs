import Image from 'next/image'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import project1 from '../../public/images/project1.jpg';

export default function FeatureCarousel() {
  return (
    <Carousel
      showThumbs={true}
      showIndicators={false}
      showStatus={false}
      centerMode={true}
    >
      <div className='p-2'>
        <Image src={project1} alt={''} width='240' height='240' />
        <div className=' md:text-xl text-xs mb-2'>
          <h1 className='title-font font-bold text-gray-200 capitalize'>
            Trybetunes
          </h1>
        </div>
        <div>
          <p className='mb-2 leading-relaxed md:text-base'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            delectus error recusandae?
          </p>
        </div>
        <div className='flex justify-center'>
          <button className='inline-flex text-white bg-gray-600 border-0 p-2 focus:outline-none hover:bg-gray-900 rounded'>
            View Project
          </button>
        </div>
      </div>
      <div className='p-2'>
        <Image src={project1} alt={''} width='240' height='240' />
        <div className=' md:text-xl text-xs mb-2'>
          <h1 className='title-font font-bold text-gray-200 capitalize'>
            Trybetunes
          </h1>
        </div>
        <div>
          <p className='mb-2 leading-relaxed md:text-base'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            delectus error recusandae?
          </p>
        </div>
        <div className='flex justify-center'>
          <button className='inline-flex text-white bg-gray-600 border-0 p-2 focus:outline-none hover:bg-gray-900 rounded'>
            View Project
          </button>
        </div>
      </div>
    </Carousel>
  );
}
