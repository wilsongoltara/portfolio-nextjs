import Copyright from "../Copyright";
import Shared from "../Shared";

const Footer = () => {
  return (
    <footer className="text-gray-500 body-font">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row sm:justify-between flex-col">
        <Copyright />
        <Shared />
      </div>
    </footer>
  );
};

export default Footer;
