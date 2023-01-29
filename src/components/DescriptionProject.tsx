import Button from '@components/Button';
import {DescriptionProjectProps} from '@interfaces/interfaceProps';

export default function DescriptionProject({nameProject, description, link}: DescriptionProjectProps) {
  return (
    <div className="w-5/6 mt-5">
      <h1 className="font-bold capitalize text-xl md:text-2xl text-gray-100">{nameProject}</h1>
      <p className="mb-2 leading-relaxed text-xs md:text-sm">
        {description}
      </p>
      <Button linkProject={link}/>
    </div>
  );
}