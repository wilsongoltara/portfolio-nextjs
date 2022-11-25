import Shared from "../Shared";

const Content = () => {
  return (
    <section id="home">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-5/6 px-4 md:flex-row text-gray-400">
        <div className="uppercase">
          <p className="text-start ml-14">i am</p>
          <h2 className="text-9xl text-white text-center mt-0 font-black shadow-gray-900 py-2">
            wilson
          </h2>
          <p className="text-end mr-14">a junior web developer</p>
        </div>
      </div>
      <Shared />
    </section>
  );
};

export default Content;
