import {Contact} from '@lib/contacts';
import {Link} from '@lib/links';
import {StaticImageData} from 'next/image';
import {IconType} from 'react-icons';

export interface HeadProps {
  title: string;
}

export interface LinksProps {
  links: Link[];
  classList?: string;
  classItem?: string;
  onClick?: () => void;
}

export interface MenuProps {
  links: Link[];
}

export interface ChildrenProps {
  children: JSX.Element;
}

export interface HeroProps {
  prefix?: string;
  name: string;
  describe: string;
}

export type Icons = {
  name: string;
  href: string;
  Icon: IconType;
};

export interface IconProps {
  icons: Icons[];
  classList: string;
}

export interface ContactsProps {
  contacts: Contact[];
}

export interface CardProps {
  pathProject: StaticImageData;
  nameProject: string;
  description: string;
  link: string;
  isSelected?: boolean;
}

export interface ButtonProps {
  linkProject: string;
}

export interface ContentAboutMeProps {
  stacks: Icons[];
  hrefImage: StaticImageData;
}
