import Link from "next/link";
import Shared from "../Shared";

const Footer = () => {
  return (
    <footer className="text-gray-500 body-font">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row sm:justify-between flex-col">
        <p className="sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          WG &copy; 2022 Wilson S Goltara —
          <Link
            href="https://github.com/goltarawilson"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @goltarawilson
          </Link>
        </p>
        <Shared />
      </div>
    </footer>
  );
};

export default Footer;
