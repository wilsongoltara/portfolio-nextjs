import ContentContact from '@components/ContentContact';
import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';
import contacts from '@lib/contacts';

export default function Contact() {
  return (
    <Transition>
      <PageTitle>Contacts</PageTitle>
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
    </Transition>
  );
}
