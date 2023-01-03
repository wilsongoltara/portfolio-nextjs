import { ChildrinProps } from 'intefaces/intefaces';

export default function Content({ children }: ChildrinProps) {
  return (
    <main className='px-10 py-5'>{children}</main>
  );
}
