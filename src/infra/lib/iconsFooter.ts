import {SiGithub, SiGmail, SiLinkedin} from 'react-icons/si';
import {Icon} from '@interfaces/interfaceProps';

export const iconsFooter: Icon[] = [
  {
    id: 1,
    name: 'GitHub',
    href: 'https://github.com/wilsongoltara',
    IconComponent: SiGithub,
  },
  {
    id: 2,
    name: 'Gmail',
    href: 'mailto:wilson.goltara15@gmail.com',
    IconComponent: SiGmail,
  },
  {
    id: 3,
    name: 'Linkedin',
    href: 'https://linkedin.com/in/wilsongoltara',
    IconComponent: SiLinkedin,
  },
];
