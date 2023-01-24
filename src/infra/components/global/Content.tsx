import {ChildrenProps} from '@interfaces/childrenProps';

export default function Content({children}: ChildrenProps) {
  return <div className="size-box">{children}</div>;
}
