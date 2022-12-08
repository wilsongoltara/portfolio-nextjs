import Link from "next/link";
import icons from "./utils/icons";

const Shared = () => {
  return (
    <article>
      <ul className="flex justify-between items-center">
        {icons.map(({ href, Icon }, index) => (
          <li key={index} className="cursor-pointer p-10">
            <Link href={href}>
              <a target="_blank">
                <Icon color="gray" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Shared;
