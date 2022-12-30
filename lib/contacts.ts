export type Contact = {
  typeContact: string;
  contact: string;
};

const contacts: Contact[] = [
  {
    typeContact: 'Address',
    contact: 'Brazil',
  },
  {
    typeContact: 'Phone',
    contact: '+55 (27) 99663-2892',
  },
  {
    typeContact: 'E-mail',
    contact: 'wilson.goltara@gmail.com',
  },
];

export default contacts;
