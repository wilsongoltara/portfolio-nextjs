import { ChildrinProps } from '@interfaces/interfaces';

export default function Content({ children }: ChildrinProps) {
  return <main className='size-box'>{children}</main>;
}
