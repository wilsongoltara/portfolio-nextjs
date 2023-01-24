import {CardProps} from '@interfaces/interfaceProps';
import Image from 'next/image';
import Button from './Button';

export default function Card({ pathProject, nameProject, description, link, isSelected }: CardProps) {
  return (
    <div className={`flex flex-col items-center m-5 text-gray-400 ${isSelected ? 'opacity-1' : 'opacity-25'}`}>
      <Image src={pathProject} alt='Project developed by Wilson Goltara' height={isSelected ? 350 : 250 } />
      {isSelected && (
        <div className="w-5/6 mt-5">
          <h1 className='font-bold capitalize text-xl md:text-2xl text-gray-100'>{nameProject}</h1>
          <p className='mb-2 leading-relaxed text-xs md:text-sm'>
            {description}
          </p>
          <Button linkProject={link}/>
        </div>
      )}
    </div>
  );
}
