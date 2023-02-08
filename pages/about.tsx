import ContentAboutMe from '@components/ContentAboutMe';
import PageTitle from '@components/PageTitle';
import Transition from '@components/Transition';
import { describe } from '@infra/lib/describeMe';
import { stacks } from '@lib/stacks';
import me from '@public/images/me.webp';

export default function About() {
  return (
    <Transition>
      <PageTitle>About me</PageTitle>
      <section className='flex justify-center'>
        <ContentAboutMe hrefImage={me} stacks={stacks} describe={describe}/>
      </section>
    </Transition>
  );
}
