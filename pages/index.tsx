import Hero from '@components/Hero';
import {dataHero} from '@lib/hero';

export default function Home() {
  const {name, describe} = dataHero;

  return <Hero name={name} describe={describe}/>;
}
