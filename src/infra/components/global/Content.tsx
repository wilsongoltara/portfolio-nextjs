import {InterfaceProps} from '@interfaces/interfaceProps';

export default function Content({children}: InterfaceProps) {
  return <div className="size-box">{children}</div>;
}
