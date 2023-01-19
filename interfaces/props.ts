import { Contact } from '@lib/contacts';
import { Icons } from '@lib/icons';
import { Link } from '@lib/links';
import { StaticImageData } from 'next/image';

export interface LinksProps {
  links: Link[];
  classList?: string;
  classItem?: string;
  onClick?: () => void;
}

export interface MenuProps {
  links: Link[];
}

export interface ChildrinProps {
  children: JSX.Element;
}

export interface HeroProps {
  prefix?: string;
  name: string;
  describe: string;
}

export interface IconProps {
  icons: Icons[];
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