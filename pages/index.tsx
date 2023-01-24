import Hero from '../src/patterns/Hero';
import { dataHero } from '../src/infra/lib/hero';

export default function Home() {
  const { prefix, name, describe } = dataHero;

  return <Hero prefix={prefix} name={name} describe={describe} />;
}
