import {ContentAboutMeProps} from '@interfaces/interfaceProps';
import Icons from '@components/Icons';
import Image from 'next/image';

export default function ContentAboutMe({hrefImage, describe, stacks}: ContentAboutMeProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-4/6 max-w-3xl">
      <div className="mr-5">
        <Image src={hrefImage} alt="me" className="rounded-md" height={400} width={400} priority/>
      </div>
      <div className="flex flex-col text-justify">
        <div className="mb-3 max-w-2xl">
          <h2 className="text-2xl text-gray-200 font-bold mb-2">About me</h2>
          <p className="text-sm">
            {describe}
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
