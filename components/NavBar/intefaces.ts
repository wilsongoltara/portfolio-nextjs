import { Link } from 'lib/links';

export interface LinksProps {
  links: Link[];
  classList: string;
  classItem: string;
  onClick?: () => void;
}

export interface MenuProps {
  links: Link[];
}
