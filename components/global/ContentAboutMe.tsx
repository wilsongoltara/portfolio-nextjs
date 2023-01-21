import { ContentAboutMeProps } from '@interfaces/props';
import Image from 'next/image';
import Icons from './Icons';

export default function ContentAboutMe({ hrefImage, stacks}: ContentAboutMeProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-4/6 max-w-3xl">
      <div className="mr-5">
        <Image src={hrefImage} alt='me' className="rounded-md" height={400} width={400}/>
      </div>
      <div className='flex flex-col text-justify'>
        <div className='mb-3 max-w-2xl'>
          <h2 className='text-2xl text-gray-200 font-bold mb-2'>About me</h2>
          <p className='text-sm'>
          I am currently studying Computer Science at the Federal University of Espírito Santo.<br/> 
          I&apos;m a Full-Stack Developer and passionate about technology. 
          I&apos;ve worked on projects using Python and C aimed at academia. 
          To use technology in the job market to solve real problems, 
          I started studying Software Development at Trybe, a school that, 
          in its teaching methodology, proposes real challenges for its students,
          encouraging teamwork and the autonomous search for solutions.
          </p>
        </div>
        <div>
          <h2 className='text-xl text-gray-200 font-bold capitalize'>Technologies</h2>
          <Icons icons={stacks} classList='flex' />
        </div>
      </div>
    </div>
  );
}
