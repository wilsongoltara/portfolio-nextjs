import {ChildrenProps} from '@interfaces/interfaceProps';

export default function Content({children}: ChildrenProps) {
  return <main className="size-box">{children}</main>;
}
