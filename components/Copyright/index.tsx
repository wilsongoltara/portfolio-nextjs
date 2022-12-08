import Link from "next/link";

const Copyright = () => {
  return (
    <>
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
    </>
  );
};

export default Copyright;
