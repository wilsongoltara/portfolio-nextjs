import { ContactsProps } from '@interfaces/props';

export default function ContentContact({ contacts }: ContactsProps) {
  return (
    <div>
      {contacts.map(({ typeContact, contact }, index) => (
        <div key={index} className='mb-5'>
          <p className='text-lg md:text-xl text-gray-200 font-semibold'>
            {typeContact}
          </p>
          <p>{contact}</p>
        </div>
      ))}
    </div>
  );
}
