import ContentContact from '../src/patterns/ContentContact';
import contacts from '../src/infra/lib/contacts';

export default function Contact() {
  return (
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
  );
}
