import { useEffect, useRef, useState } from 'react';
import Tag from '../Tag/Tag';
import SiteEmbed from '../SiteEmbed/SiteEmbed';
import './ProjectModal.css';

export default function ProjectModal({ projeto, aoFechar }) {
  const fechadorRef = useRef(null);
  const temSiteHospedado = Boolean(projeto?.demoUrl);
  const [abaAtiva, setAbaAtiva] = useState(temSiteHospedado ? 'site' : 'prototipo');

  useEffect(() => {
    setAbaAtiva(temSiteHospedado ? 'site' : 'prototipo');
  }, [projeto, temSiteHospedado]);

  useEffect(() => {
    fechadorRef.current?.focus();
    function aoPressionarTecla(e) {
      if (e.key === 'Escape') aoFechar();
    }
    document.addEventListener('keydown', aoPressionarTecla);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', aoPressionarTecla);
      document.body.style.overflow = '';
    };
  }, [aoFechar]);

  if (!projeto) return null;
  const { Prototipo } = projeto;

  return (
    <div className="project-modal__cortina" onClick={aoFechar}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal__cabecalho">
          <div>
            <span className="project-modal__categoria">{projeto.categoria}</span>
            <h3 id="project-modal-titulo">{projeto.nome}</h3>
          </div>
          <div className="project-modal__cabecalho-acoes">
            {!projeto.repoPrivado && projeto.repoUrl && (
              <a className="project-modal__link-repo" href={projeto.repoUrl} target="_blank" rel="noreferrer">
                repositório
              </a>
            )}
            <button
              type="button"
              ref={fechadorRef}
              className="project-modal__fechar"
              onClick={aoFechar}
              aria-label="Fechar"
            >
              fechar ✕
            </button>
          </div>
        </div>

        <div className="project-modal__stack">
          {projeto.stack.map((tec) => <Tag key={tec}>{tec}</Tag>)}
        </div>

        {temSiteHospedado && (
          <div className="project-modal__abas" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={abaAtiva === 'site'}
              className={`project-modal__aba ${abaAtiva === 'site' ? 'is-ativa' : ''}`}
              onClick={() => setAbaAtiva('site')}
            >
              Site publicado
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={abaAtiva === 'prototipo'}
              className={`project-modal__aba ${abaAtiva === 'prototipo' ? 'is-ativa' : ''}`}
              onClick={() => setAbaAtiva('prototipo')}
            >
              Protótipo interativo
            </button>
          </div>
        )}

        <div className="project-modal__area">
          {abaAtiva === 'site' && temSiteHospedado
            ? <SiteEmbed url={projeto.demoUrl} titulo={projeto.nome} />
            : <Prototipo />}
        </div>
      </div>
    </div>
  );
}
