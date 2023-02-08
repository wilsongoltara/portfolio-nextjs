import * as imageProjects from '@public/images/projects';
import {CardProps} from '@interfaces/interfaceProps';

export const projects: CardProps[] = [
  {
    pathImage: imageProjects.indioCoffee,
    nameProject: 'Indio Coffee',
    description: 'A simple clone of Starbucks main page',
    link: 'https://indio-coffee.vercel.app/'
  },
  {
    pathImage: imageProjects.notificationsServices,
    nameProject: 'Notifications Microservices',
    description: 'A fully scalable and testable notifications microservice',
    link: 'https://github.com/wilsongoltara/notifications-service',
  },
  {
    pathImage: imageProjects.trybeFutebolClube,
    nameProject: 'Trybe Futebol Clube',
    description: 'TFC is an informational website about football matches and rankings',
    link: 'https://github.com/wilsongoltara/trybe-futebol-clube'
  },
];
