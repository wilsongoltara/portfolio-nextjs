import Link from '@components/Link';
import {IconProps} from '@interfaces/interfaceProps';

export default function Icon({ href, nameIcon }: IconProps) {
  return (
    <div className='p-2 hover:text-gray-200 hover:scale-105'>
      <Link href={href}>
        <span className='text-3xl cursor-pointer'>{nameIcon}</span>
      </Link>
    </div>
  );
};
