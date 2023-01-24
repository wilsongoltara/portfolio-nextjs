import Hero from '../src/infra/components/global/Hero';
import { dataHero } from '@lib/hero';
import Head from 'next/head';

export default function Home() {
  const { prefix, name, describe } = dataHero;

  return (
    <>
      <Head>
        <title>Wilson Goltara</title>
      </Head>
      <Hero prefix={prefix} name={name} describe={describe} />
    </>
  );
}
