'use client';

import Hero from '@components/Hero';
import Transition from '@components/Transition';
import { dataHero } from '@lib/hero';

export default function HomePage() {
  const { name, describe } = dataHero;

  return (
    <Transition>
      <Hero name={name} describe={describe} />
    </Transition>
  );
}

