import me from '@public/images/me.webp';
import ContentAboutMe from '@components/ContentAboutMe';
import {AppContext} from '@infra/context/AppContext';
import {stacks} from '@lib/stacks';
import {useContext} from 'react';
import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';

const describe = `
    I am currently studying Computer Science at the Federal University of Espírito Santo.\n
    I' m a Full-Stack Developer and passionate about technology. 
    I've worked on projects using Python and C aimed at academia. 
    To use technology in the job market to solve real problems, 
    I started studying Software Development at Trybe, a school that, 
    in its teaching methodology, proposes real challenges for its students,
    encouraging teamwork and the autonomous search for solutions.
`;

export default function About() {
  const {nav} = useContext(AppContext);

  return (
    <Transition>
      <section className={`flex justify-center ${nav ? 'hidden' : null}`}>
        <PageTitle>About me</PageTitle>
        <ContentAboutMe hrefImage={me} stacks={stacks} describe={describe}/>
      </section>
    </Transition>
  );
}
