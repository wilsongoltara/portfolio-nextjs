import {Contact} from '@lib/contacts';
import {StaticImageData} from 'next/image';
import {IconType} from 'react-icons';
import {ReactNode} from 'react';

export interface ButtonProps {
  linkProject: string;
}

export interface ChildrenProps {
  children: JSX.Element;
}

export interface HeadProps {
  title: string;
}

export interface LinkNavBar {
  id: number;
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

export interface HeroProps {
  prefix?: string;
  name: string;
  describe: string;
}

export interface Icons {
  name: string;
  href: string;
  Icon: IconType;
}

export interface IconsProps {
  icons: Icons[];
  classList: string;
}

export interface IconProps {
  nameIcon: string;
  href: string;
}

export interface ContactsProps {
  contacts: Contact[];
}

export interface CardProps {
  pathProject: string;
  nameProject: string;
  description: string;
  link: string;
  isSelected?: boolean;
}

export interface ContentAboutMeProps {
  stacks: Icons[];
  hrefImage: StaticImageData;
}
