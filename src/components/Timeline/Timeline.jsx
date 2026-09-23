import './Timeline.css';

export default function Timeline({ itens }) {
  return (
    <ol className="timeline">
      {itens.map((item, i) => (
        <li key={i} className="timeline__item">
          <div className="timeline__marco" aria-hidden="true" />
          <div className="timeline__conteudo">
            <div className="timeline__cabecalho">
              <h4>{item.cargo}</h4>
              <span className="timeline__periodo">{item.periodo}</span>
            </div>
            <p className="timeline__instituicao">{item.instituicao}</p>
            <p className="timeline__descricao">{item.descricao}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
