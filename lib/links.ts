export interface Link {
  link: string,
  href: string,
};

const links: Link[] = [
  {
    link: 'Home',
    href: '/'
  },
  {
    link: 'About me',
    href: '/about'
  },
  {
    link: 'Projects',
    href: '/projects',
  },
  {
    link: 'Contact',
    href: '/contact',
  }
];

export default links;
