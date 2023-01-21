import ContentContact from '@components/global/ContentContact';
import contacts from '@lib/contacts';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name='description'
          content='information about contacts'
          key='desc'
        />
      </Head>
      <section className='text-center'>
        <div>
          <h2 className='text-3xl md:text-4xl text-gray-200 font-bold uppercase'>
            Contact
          </h2>
          <p className='mb-8 leading-relaxed'>
            Please contact me for a short chat
          </p>
        </div>
        <ContentContact contacts={contacts}/>
      </section>
    </>
  );
}
