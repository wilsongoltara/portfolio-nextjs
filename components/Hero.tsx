export interface HeroProps {
  name: string;
}

const Hero = ({ name }: HeroProps) => {
  return (
    <section>
      <div className='mx-auto flex flex-col items-center justify-center px-4'>
        <div className='uppercase'>
          <p className='text-start'>i am</p>
          <h2 className='name-of-developer'>
            {name}
          </h2>
          <p className='text-end'>a junior web developer</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
