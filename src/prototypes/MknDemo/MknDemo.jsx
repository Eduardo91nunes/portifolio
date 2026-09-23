import { useState } from 'react';
import './MknDemo.css';

const SERVICOS = [
  {
    titulo: 'Outorga',
    resumo: 'Regularização do uso de recursos hídricos.',
    detalhe: 'Autorização para uso de água de rios, lagos e aquíferos, com estudos hidrológicos e acompanhamento junto aos órgãos competentes.',
  },
  {
    titulo: 'PGRS',
    resumo: 'Plano de Gerenciamento de Resíduos Sólidos.',
    detalhe: 'Diagnóstico, caracterização e plano de manejo, acondicionamento e destinação final dos resíduos gerados pela empresa.',
  },
  {
    titulo: 'Licenciamento Ambiental',
    resumo: 'Regularização de empreendimentos junto aos órgãos ambientais.',
    detalhe: 'Condução do processo de licenciamento do zero: diagnóstico, protocolo, acompanhamento técnico e emissão da licença.',
  },
  {
    titulo: 'CAR — Cadastro Ambiental Rural',
    resumo: 'Regularização fundiária e ambiental de imóveis rurais.',
    detalhe: 'Levantamento georreferenciado da propriedade e cadastro junto ao sistema estadual, exigido para crédito rural e regularização.',
  },
  {
    titulo: 'Gerenciamento Ambiental',
    resumo: 'Acompanhamento contínuo da conformidade ambiental.',
    detalhe: 'Gestão contínua de obrigações, prazos e documentação ambiental da operação, evitando multas e autuações.',
  },
];

export default function MknDemo() {
  const [abertoIndex, setAbertoIndex] = useState(0);

  return (
    <div className="mkn-demo">
      <p className="mkn-demo__legenda">
        Recorte de demonstração — catálogo de serviços em acordeão, como na
        página real de serviços.
      </p>

      <div className="mkn-demo__lista">
        {SERVICOS.map((servico, i) => {
          const aberto = i === abertoIndex;
          return (
            <div className={`mkn-demo__item ${aberto ? 'is-aberto' : ''}`} key={servico.titulo}>
              <button
                type="button"
                className="mkn-demo__cabecalho"
                onClick={() => setAbertoIndex(aberto ? -1 : i)}
                aria-expanded={aberto}
              >
                <span className="mkn-demo__titulo">{servico.titulo}</span>
                <span className="mkn-demo__seta" aria-hidden="true">{aberto ? '−' : '+'}</span>
              </button>
              <p className="mkn-demo__resumo">{servico.resumo}</p>
              {aberto && <p className="mkn-demo__detalhe">{servico.detalhe}</p>}
            </div>
          );
        })}
      </div>

      <div className="mkn-demo__estatisticas">
        <div><strong>100+</strong><span>projetos concluídos</span></div>
        <div><strong>5</strong><span>frentes de atuação</span></div>
      </div>
    </div>
  );
}
