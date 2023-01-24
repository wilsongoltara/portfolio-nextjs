import me from '@public/images/me.webp';
import ContentAboutMe from '@patterns/ContentAboutMe';
import { AppContext } from '@infra/components/Layout';
import stacks from '@lib/stacks';
import { useContext } from 'react';

export default function About() {
  const { nav } = useContext(AppContext);

  return (
    <section className={`flex justify-center ${nav ? 'hidden': null}`}>
      <ContentAboutMe hrefImage={me} stacks={stacks} />
    </section>
  );
}
