import Timeline from '../../../../components/Timeline/Timeline';
import { experiencias, formacao, certificacoes } from '../../../../data/experience';
import './Experiencia.css';

export default function Experiencia() {
  return (
    <section id="experiencia" className="secao experiencia">
      <div className="envelope experiencia__grade">
        <div>
          <span className="rotulo-secao">Experiências</span>
          <Timeline itens={experiencias} />
        </div>

        <div className="experiencia__lateral">
          <div>
            <span className="experiencia__lateral-titulo">Formação</span>
            <p className="experiencia__formacao">{formacao.curso}</p>
            <p className="experiencia__formacao-meta">{formacao.instituicao} · {formacao.conclusao}</p>
          </div>

          {certificacoes.length > 0 && (
            <div>
              <span className="experiencia__lateral-titulo">Certificações</span>
              <ul className="experiencia__certificacoes">
                {certificacoes.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
