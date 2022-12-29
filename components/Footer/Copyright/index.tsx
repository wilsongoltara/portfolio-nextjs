import Link from "next/link";

const Copyright = () => {
  return (
    <article className="p-2">
      <span>
        WG &copy; 2022 by
        <a
          href="https://github.com/goltarawilson"
          className="ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          Wilson S. Goltara
        </a>
      </span>
    </article>
  );
};

export default Copyright;
