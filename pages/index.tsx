import Hero from '@components/Hero';
import { dataHero } from '@lib/hero';

export default function Home() {
  const { prefix, name, describe } = dataHero;

  return <Hero prefix={prefix} name={name} describe={describe} />;
}
