import {ButtonProps} from '@interfaces/childrenProps';
import Link from 'next/link';

export default function Button({ linkProject }: ButtonProps) {
  return (
    <button className='button-bg h-10 w-40 shadow-lg'>
      <Link href={linkProject}>
        <a target='_blank'>View Project</a>
      </Link>
    </button>
  );
}