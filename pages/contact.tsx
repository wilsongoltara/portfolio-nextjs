import ContentContact from '@components/ContentContact';
import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';
import { AppContext } from '@infra/context/AppContext';
import contacts from '@lib/contacts';
import { useContext } from 'react';

export default function Contact() {
  const {nav} = useContext(AppContext);
  return (
    (!nav &&<Transition>
      <section className='text-center'>
        <PageTitle>Contacts</PageTitle>
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
    </Transition>)
  );
}
