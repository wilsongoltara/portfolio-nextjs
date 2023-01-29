import {HeroProps} from '@interfaces/interfaceProps';

export default function Hero({name, describe}: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="uppercase">
        <h2 className="name-of-developer">{name}</h2>
        <p className="text-end">{describe}</p>
      </div>
    </section>
  );
};
