import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Shared = () => {
  return (
    <div>
      <ul className="ml-24">
        <li className="mt-5 cursor-pointer">
          <Link href="https://github.com/wilsongoltara">
            <a target="_blank">
              <SiGithub color="gray" />
            </a>
          </Link>
        </li>
        <li className="mt-5 cursor-pointer">
          <Link href="https://linkedin.com/in/wilsongoltara" target="_blank">
            <a target="_blank">
              <SiLinkedin color="gray" />
            </a>
          </Link>
        </li>
        <li className="mt-5 cursor-pointer">
          <Link href="linkedin.com/in/wilsongoltara" target="_blank">
            <a target="_blank">
              <SiGmail color="gray" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Shared;
