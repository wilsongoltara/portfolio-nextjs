import {InterfaceProps} from '@interfaces/interfaceProps';

export default function Content({children}: InterfaceProps) {
  return <main className="size-box">{children}</main>;
}
