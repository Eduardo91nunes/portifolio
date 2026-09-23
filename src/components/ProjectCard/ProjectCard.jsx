import Tag from '../Tag/Tag';
import './ProjectCard.css';

export default function ProjectCard({ projeto, aoAbrir }) {
  return (
    <article className="project-card">
      <div className="project-card__aba">{projeto.categoria}</div>
      <h3 className="project-card__nome">{projeto.nome}</h3>
      <p className="project-card__resumo">{projeto.resumo}</p>

      <div className="project-card__stack">
        {projeto.stack.map((tec) => <Tag key={tec}>{tec}</Tag>)}
      </div>

      <div className="project-card__acoes">
        <button type="button" className="project-card__botao" onClick={() => aoAbrir(projeto)}>
          Abrir protótipo
        </button>
        {!projeto.repoPrivado && projeto.repoUrl && (
          <a className="project-card__link-repo" href={projeto.repoUrl} target="_blank" rel="noreferrer">
            ver repositório
          </a>
        )}
      </div>

      <span className="project-card__nota">
        {projeto.repoPrivado ? 'repositório privado — protótipo de demonstração' : 'protótipo de demonstração'}
      </span>
    </article>
  );
}
