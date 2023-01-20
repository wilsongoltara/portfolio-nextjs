import me from '@assets/me.jpg';
import icons from '@lib/icons';
import Image from 'next/image';
import Shared from './Shared';

export default function ContentAboutMe() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-4/6 max-w-3xl">
      <div className="mr-5">
        <Image src={me} alt='me' className="rounded-sm" height={400} width={400}/>
      </div>
      <div className='flex flex-col text-justify'>
        <div className='mb-3'>
          <h2 className='text-xl text-gray-200 font-bold mb-2'>About me</h2>
          <p className='text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem doloribus odit,
            iste nemo qui est dicta iusto fugit animi,
          </p>
        </div>
        <div>
          <h2 className='text-xl text-gray-200 font-bold'>Techs</h2>
          <Shared icons={icons} />
        </div>
      </div>
    </div>
  );
}
