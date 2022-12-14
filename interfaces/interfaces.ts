import { Link } from '@lib/links';

export interface LinksProps {
  links: Link[];
  classList: string;
  classItem: string;
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
