import {Contact} from '@lib/contacts';
import {StaticImageData} from 'next/image';
import {IconType} from 'react-icons';
import {ReactNode} from 'react';

export interface ButtonProps {
  linkProject: string;
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[] | string;
}

export interface ContactsProps {
  contacts: Contact[];
}

export interface CardProps {
  pathImage: string;
  nameProject: string;
  description: string;
  link: string;
  isSelected?: boolean;
}

export interface ContentAboutMeProps {
  stacks: Icon[];
  hrefImage: StaticImageData;
  describe: string;
}

export interface CopyrightProps {
  nameCopy: string;
  year: string | number;
  href: string;
  nameLink: string;
}

export interface DescriptionProjectProps {
  nameProject: string;
  description: string;
  link: string;
}

export interface HeroProps {
  name: string;
  describe: string;
}

export interface Icon {
  id: string | number;
  name: string;
  href: string;
  IconComponent: IconType;
}

export interface IconsProps {
  icons: Icon[];
  classList: string;
}

export interface IconProps {
  nameIcon: string;
  href: string;
}

export interface LinkNavBar {
  id: string | number;
  link: string;
  href: string;
}

export interface LinkProps {
  href: string;
  children: JSX.Element | ReactNode;
  className?: string;
  target?: string;
}

export interface LinksProps {
  links: LinkNavBar[];
  classList?: string;
  classItem?: string;
  onClick?: () => void;
}

export interface MenuProps {
  links: LinkNavBar[];
}
