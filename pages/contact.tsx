import contacts from '@lib/contacts';
import { NextPage } from 'next';
import Head from 'next/head';

const ContentContact = () => {
  return (
    <div className='section-center'>
      {contacts.map(({ typeContact, contact }, index) => (
        <span key={index} className='mb-4'>
          <p className='text-lg md:text-xl text-gray-200 font-semibold'>
            {typeContact}
          </p>
          <p>{contact}</p>
        </span>
      ))}
    </div>
  );
};

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>

      <section className='text-center'>
        <div className='w-2/3 md:w-full'>
          <h2 className='text-2xl md:text-3xl mb-2 text-gray-200 font-semibold uppercase'>
            Contact
          </h2>
          <p className='mb-8 leading-relaxed'>
            Please contact me for a short chat
          </p>
        </div>
        <ContentContact />
      </section>
    </>
  );
};

export default Contact;
