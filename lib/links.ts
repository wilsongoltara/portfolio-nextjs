export interface Link {
  link: string,
  href: string,
};

const links: Link[] = [
  {
    link: 'home',
    href: '/'
  },
  {
    link: 'projects',
    href: '/projects',
  },
  {
    link: 'contact',
    href: '/contact',
  }
];

export default links;
