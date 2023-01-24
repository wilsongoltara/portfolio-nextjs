import {CardProps} from '@interfaces/interfaceProps';
import Image from 'next/image';
import DescriptionProject from '@components/DescriptionProject';

export default function Card({pathImage, nameProject, description, link, isSelected}: CardProps) {
  return (
    <div className={`flex flex-col items-center m-3 text-gray-400 ${isSelected ? 'opacity-1' : 'opacity-25'}`}>
      <Image src={pathImage} alt="Project developed by Wilson Goltara" height={isSelected ? 275 : 250} width={600}/>
      {isSelected && (
        <DescriptionProject nameProject={nameProject} description={description} link={link}/>
      )}
    </div>
  );
}
