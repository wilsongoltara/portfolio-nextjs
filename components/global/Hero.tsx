import { HeroProps } from '@interfaces/interfaces';

const Hero = ({ prefix, name, describe }: HeroProps) => {
  return (
    <section className='section-center'>
      <div className='uppercase'>
        <p className='text-start'>{prefix}</p>
        <h2 className='name-of-developer'>{name}</h2>
        <p className='text-end'>{describe}</p>
      </div>
    </section>
  );
};

export default Hero;
