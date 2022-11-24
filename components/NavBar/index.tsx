import links from "./utils/links";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-20 text-white fixed">
      <div className="text-4xl ml-2">WG</div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li key={id} className="px-10 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
