import { CardProps } from '@interfaces/props';
import Image from 'next/image';
import Button from './Button';

export default function Card({ pathProject, nameProject, description, link }: CardProps) {
  return (
    <div className='flex flex-col items-center m-8 text-gray-400'>
      <Image src={pathProject} alt='Project develop' height={350} />
      <div className="w-5/6 mt-4">
        <h1 className='font-bold capitalize text-xl md:text-2xl text-gray-100'>{nameProject}</h1>
        <p className='mb-2 leading-relaxed text-xs md:text-sm'>
          {description}
        </p>
      </div>
      <Button linkProject={link}/>
    </div>
  );
}
