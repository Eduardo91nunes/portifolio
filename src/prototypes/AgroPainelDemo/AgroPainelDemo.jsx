import { useMemo, useState } from 'react';
import './AgroPainelDemo.css';

const TALHOES = [
  { id: 't1', nome: 'Talhão 01', cultura: 'Soja', pontos: '10,10 120,10 120,90 10,90', umidade: 38, temperatura: 27, produtividade: 62 },
  { id: 't2', nome: 'Talhão 02', cultura: 'Milho', pontos: '130,10 240,10 240,90 130,90', umidade: 44, temperatura: 26, produtividade: 71 },
  { id: 't3', nome: 'Talhão 03', cultura: 'Sorgo', pontos: '10,100 120,100 120,180 10,180', umidade: 29, temperatura: 29, produtividade: 48 },
  { id: 't4', nome: 'Talhão 04', cultura: 'Soja', pontos: '130,100 240,100 240,180 130,180', umidade: 41, temperatura: 27, produtividade: 66 },
];

const METRICAS = {
  umidade: { rotulo: 'Umidade do solo', sufixo: '%' },
  temperatura: { rotulo: 'Temperatura', sufixo: '°C' },
  produtividade: { rotulo: 'Produtividade estimada', sufixo: ' sc/ha' },
};

export default function AgroPainelDemo() {
  const [talhaoAtivoId, setTalhaoAtivoId] = useState(TALHOES[0].id);
  const [metricaA, setMetricaA] = useState('umidade');
  const [metricaB, setMetricaB] = useState('produtividade');

  const talhaoAtivo = TALHOES.find((t) => t.id === talhaoAtivoId);

  const indicePersonalizado = useMemo(() => {
    if (!talhaoAtivo) return 0;
    const a = talhaoAtivo[metricaA];
    const b = talhaoAtivo[metricaB];
    return ((a / b) * 10).toFixed(2);
  }, [talhaoAtivo, metricaA, metricaB]);

  return (
    <div className="agro-demo">
      <p className="agro-demo__legenda">
        Recorte de demonstração — mapa de talhões, indicadores e o construtor de
        indicador sem código, com dados de exemplo.
      </p>

      <div className="agro-demo__corpo">
        <svg className="agro-demo__mapa" viewBox="0 0 250 190" role="img" aria-label="Mapa de talhões">
          {TALHOES.map((t) => (
            <polygon
              key={t.id}
              points={t.pontos}
              className={`agro-demo__talhao ${t.id === talhaoAtivoId ? 'is-ativo' : ''}`}
              onClick={() => setTalhaoAtivoId(t.id)}
              tabIndex={0}
              role="button"
              aria-pressed={t.id === talhaoAtivoId}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setTalhaoAtivoId(t.id)}
            />
          ))}
        </svg>

        <div className="agro-demo__painel">
          <h4>{talhaoAtivo.nome} <span>· {talhaoAtivo.cultura}</span></h4>
          <div className="agro-demo__kpis">
            {Object.entries(METRICAS).map(([chave, meta]) => (
              <div className="agro-demo__kpi" key={chave}>
                <span className="agro-demo__kpi-rotulo">{meta.rotulo}</span>
                <span className="agro-demo__kpi-valor">{talhaoAtivo[chave]}{meta.sufixo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="agro-demo__construtor">
        <span className="agro-demo__construtor-titulo">Construtor de indicador</span>
        <div className="agro-demo__construtor-linha">
          <select value={metricaA} onChange={(e) => setMetricaA(e.target.value)}>
            {Object.entries(METRICAS).map(([chave, meta]) => (
              <option key={chave} value={chave}>{meta.rotulo}</option>
            ))}
          </select>
          <span>÷</span>
          <select value={metricaB} onChange={(e) => setMetricaB(e.target.value)}>
            {Object.entries(METRICAS).map(([chave, meta]) => (
              <option key={chave} value={chave}>{meta.rotulo}</option>
            ))}
          </select>
          <span>× 10 =</span>
          <strong>{indicePersonalizado}</strong>
        </div>
      </div>
    </div>
  );
}
