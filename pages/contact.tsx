import { NextPage } from 'next';
import Head from 'next/head';
import contacts from '../lib/contacts';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <section className='text-gray-400 body-font'>
        <div className='mx-auto flex flex-col items-center justify-center px-4'>
          <div className='text-center w-2/3 md:w-full'>
            <h2 className='title-font text-2xl md:text-3xl mb-4 font-bold text-gray-200 uppercase'>
              Contact
            </h2>
            <p className='mb-8 leading-relaxed'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              quam dolorum dolore cupiditate!
            </p>
          </div>
          <div className='flex justify-center flex-col text-center'>
            {contacts.map(({ typeContact, contact }, index) => (
              <span key={index} className='mb-4'>
                <p className='title-font text-lg md:text-xl text-gray-200 font-bold'>
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