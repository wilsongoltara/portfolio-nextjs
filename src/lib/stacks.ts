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
import {Icons} from '@interfaces/childrenProps';

const stacks: Icons[] = [
  {
    name: 'ReactJS',
    href: 'https://nextjs.org/',
    Icon: SiReact,
  },
  {
    name: 'NextJS',
    href: 'https://nextjs.org/',
    Icon: SiNextdotjs,
  },
  {
    name: 'Typescript',
    href: 'https://www.typescriptlang.org/',
    Icon: SiTypescript,
  },
  {
    name: 'NodeJS',
    href: 'https://nodejs.org/',
    Icon: SiNodedotjs,
  },
  {
    name: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
    Icon: SiTailwindcss,
  },
  {
    name: 'Jest',
    href: 'https://jestjs.io/pt-BR/',
    Icon: SiJest,
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    Icon: SiMongodb,
  },
  {
    name: 'MySQL',
    href: 'https://www.mysql.com/',
    Icon: SiMysql,
  },
];

export default stacks;
