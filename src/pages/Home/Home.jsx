import Hero from './sections/Hero/Hero';
import Sobre from './sections/Sobre/Sobre';
import Experiencia from './sections/Experiencia/Experiencia';
import Projetos from './sections/Projetos/Projetos';
import Contato from './sections/Contato/Contato';

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Experiencia />
      <Projetos />
      <Contato />
    </>
  );
}
