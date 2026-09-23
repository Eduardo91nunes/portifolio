import { perfil } from '../../../../data/profile';
import './Hero.css';

export default function Hero() {
  return (
    <section id="topo" className="hero envelope">
      <div className="hero__linha-campo" aria-hidden="true">
        <span>{perfil.localizacao}</span>
        <span>{perfil.disponibilidade}</span>
      </div>

      <h1 className="hero__titulo">
        <span className="hero__linha">Interfaces que aguentam</span>
        <span className="hero__linha">o trabalho do dia a dia.</span>
      </h1>

      <p className="hero__bio">{perfil.bioResumo}</p>

      <div className="hero__acoes">
        <a href="#projetos" className="hero__botao">Ver projetos</a>
        <a href="#contato" className="hero__link">falar com {perfil.nome.split(' ')[0]}</a>
      </div>
    </section>
  );
}
