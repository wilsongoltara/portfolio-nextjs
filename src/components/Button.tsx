import {ButtonProps} from '@interfaces/interfaceProps';
import Link from './Link';

export default function Button({ linkProject }: ButtonProps) {
  return (
    <button className='button-bg h-10 w-40 shadow-lg'>
      <Link href={linkProject}>View Project</Link>
    </button>
  );
}
