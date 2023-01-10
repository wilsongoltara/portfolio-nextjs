import { ChildrinProps } from '@interfaces/interfaces';

export default function Content({ children }: ChildrinProps) {
  return <div className='size-box'>{children}</div>;
}
