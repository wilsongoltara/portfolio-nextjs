import { ChildrinProps } from '@interfaces/props';

export default function Content({ children }: ChildrinProps) {
  return <div className='size-box'>{children}</div>;
}
