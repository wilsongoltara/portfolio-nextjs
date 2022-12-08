import Footer from "../Footer";
import contacts from "./utils/contacts";

const Contact = () => {
  return (
    <section id="contact" className="text-gray-400 body-font">
      <div className="container mx-auto flex flex-col items-center justify-center h-5/6 px-4">
        <div className="text-center lg:w-2/3 w-full">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200 uppercase">
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
              <p className="title-font sm:text-xl text-3xl text-gray-200 font-bold">
                {typeContact}
              </p>
              <p>{contact}</p>
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
