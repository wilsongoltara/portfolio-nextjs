import Hero from '@components/Hero';
import Transition from '@components/Transition';
import {dataHero} from '@lib/hero';

export default function Home() {
  const {name, describe} = dataHero;

  return (
    <Transition>
      <Hero name={name} describe={describe}/>
    </Transition>
  );
}
