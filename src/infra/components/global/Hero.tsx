import { HeroProps } from '@interfaces/props';

export default function Hero({ prefix, name, describe }: HeroProps) {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='uppercase'>
        <p className='text-start'>{prefix}</p>
        <h2 className='name-of-developer'>{name}</h2>
        <p className='text-end'>{describe}</p>
      </div>
    </section>
  );
};
