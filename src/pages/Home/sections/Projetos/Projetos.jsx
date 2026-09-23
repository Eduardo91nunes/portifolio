import { useState } from 'react';
import ProjectCard from '../../../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../../../components/ProjectModal/ProjectModal';
import { projetos } from '../../../../data/projects';
import './Projetos.css';

export default function Projetos() {
  const [projetoAberto, setProjetoAberto] = useState(null);

  return (
    <section id="projetos" className="secao projetos">
      <div className="envelope">
        <span className="rotulo-secao">Projetos</span>
        <p className="projetos__intro">
          Cada projeto abaixo tem um repositório público no GitHub. Clique no
          card para abrir um protótipo interativo uma recriação da
          interface real, pensada para mostrar a experiência sem precisar
          rodar o projeto localmente.
        </p>

        <div className="projetos__grade">
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} aoAbrir={setProjetoAberto} />
          ))}
        </div>
      </div>

      {projetoAberto && (
        <ProjectModal projeto={projetoAberto} aoFechar={() => setProjetoAberto(null)} />
      )}
    </section>
  );
}
