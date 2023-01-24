import me from '@assets/me.jpg';
import ContentAboutMe from '@components/global/ContentAboutMe';
import { AppContext } from '@components/Layout';
import stacks from '../src/lib/stacks';
import { useContext } from 'react';

export default function About() {
  const { nav } = useContext(AppContext);

  return (
    <section className={`flex justify-center ${nav ? 'hidden': null}`}>
      <ContentAboutMe hrefImage={me} stacks={stacks} />
    </section>
  );
}
