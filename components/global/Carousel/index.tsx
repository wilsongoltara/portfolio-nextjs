import Image from 'next/image'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import project1 from '../../../assets/project1.jpg';

export default function FeatureCarousel() {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div className='flex flex-col justify-center items-center'>
        <div className='h-2/4 w-2/4 md:h-2/6 md:w-2/6'>
          <Image src={project1} alt={''} className='relative'/>
        </div>
        <div className='md:text-xl text-base mb-2 bg-transparent'>
          <h1 className='font-bold text-gray-200 capitalize'>
            Trybetunes
          </h1>
        </div>
        <div>
          <p className='mb-2 leading-relaxed text-sm md:text-base'>
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
      <div className='flex flex-col justify-center items-center '>
        <div className='h-2/4 w-2/4 md:h-2/6 md:w-2/6'>
          <Image src={project1} alt={''} />
        </div>
        <div className='md:text-xl text-base mb-2'>
          <h1 className='font-bold text-gray-200 capitalize'>
            Trybetunes
          </h1>
        </div>
        <div>
          <p className='mb-2 leading-relaxed text-sm md:text-base'>
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
