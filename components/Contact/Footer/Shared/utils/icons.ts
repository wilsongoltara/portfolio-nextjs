import { IconType } from "react-icons";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export type Icons = {
  href: string;
  Icon: IconType;
}

const icons: Icons[] = [
  {
    href: 'https://github.com/wilsongoltara',
    Icon: SiGithub,
  },
  {
    href: 'https://github.com/wilsongoltara',
    Icon: SiGmail,
  },
  {
    href: 'https://linkedin.com/in/wilsongoltara',
    Icon: SiLinkedin,
  }
];

export default icons;
