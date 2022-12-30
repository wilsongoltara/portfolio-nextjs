import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import project1 from "../public/images/project1.jpg"

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Build</title>
      </Head>
      <section id="projects" className="text-gray-400 body-font">
        <div className="container mx-auto flex items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="project"
            width={250}
            height={250}
            src={project1}
          />
          {/* componentizar */}
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-200 capitalize">
              Trybetunes
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nostrum delectus error recusandae? Cum ad totam adipisci eos vitae,
              aspernatur velit dolor in nam fuga 
              reprehenderit mollitia hic debitis aperiam harum.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
