import { NextPage } from "next";
import Head from "next/head";
import contacts from "../lib/contacts";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        meta
      </Head>
      <section id="contact" className="text-gray-400 body-font">
        <div className="container mx-auto flex flex-col items-center justify-center h-5/6 px-4">
          <div className="text-center lg:w-2/3 w-full">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-200 uppercase">
              Contact
            </h2>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quam
              dolorum dolore cupiditate! Fugit consequatur cumque possimus fuga
              magnam, nihil illum perspiciatis repellendus, sequi et sit inventore
              fugiat ducimus maiores?
            </p>
          </div>
          <div className="flex justify-center flex-col text-center">
            {contacts.map(({ typeContact, contact}, index) => (
              <span key={index} className="mb-4">
                <p className="title-font text-xl text-gray-200 font-bold">
                  {typeContact}
                </p>
                <p>{contact}</p>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
