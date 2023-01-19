import indioCoffee from '@assets/indio-coffee.png';
import notificationsServices from '@assets/notifications-services.png';
import trybeFutebolClube from '@assets/trybe-futebol-clube.png';
import { CardProps } from '@interfaces/props';

export const projects: CardProps[] = [
  {
    pathProject: notificationsServices,
    nameProject: 'Notifications Microservices',
    description: 'A fully scalable and testable notifications microservice',
    link: 'https://github.com/wilsongoltara/notifications-service',
  },
  {
    pathProject: indioCoffee,
    nameProject: 'Indio Coffee',
    description: 'A simple clone of Starbucks main page',
    link: 'https://indiocoffee.surge.sh/'
  },
  {
    pathProject: trybeFutebolClube,
    nameProject: 'Trybe Futebol Clube',
    description: 'TFC is an informational website about football matches and rankings',
    link: 'https://github.com/wilsongoltara/trybe-futebol-clube'
  },
];
