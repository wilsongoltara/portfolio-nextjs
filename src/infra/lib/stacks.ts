import {
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import {Icon} from '@interfaces/interfaceProps';

export const stacks: Icon[] = [
  {
    id: 1,
    name: 'ReactJS',
    href: 'https://nextjs.org/',
    IconComponent: SiReact,
  },
  {
    id: 2,
    name: 'NextJS',
    href: 'https://nextjs.org/',
    IconComponent: SiNextdotjs,
  },
  {
    id: 3,
    name: 'Typescript',
    href: 'https://www.typescriptlang.org/',
    IconComponent: SiTypescript,
  },
  {
    id: 4,
    name: 'NodeJS',
    href: 'https://nodejs.org/',
    IconComponent: SiNodedotjs,
  },
  {
    id: 5,
    name: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
    IconComponent: SiTailwindcss,
  },
  {
    id: 6,
    name: 'Jest',
    href: 'https://jestjs.io/pt-BR/',
    IconComponent: SiJest,
  },
  {
    id: 7,
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    IconComponent: SiMongodb,
  },
  {
    id: 9,
    name: 'MySQL',
    href: 'https://www.mysql.com/',
    IconComponent: SiMysql,
  },
];
