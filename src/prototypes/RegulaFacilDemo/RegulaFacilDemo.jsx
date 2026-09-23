import { useMemo, useState } from 'react';
import './RegulaFacilDemo.css';

const FILA_INICIAL = [
  { id: 'f1', paciente: 'M. A. Souza', especialidade: 'Cardiologia', urgente: false },
  { id: 'f2', paciente: 'J. P. Lima', especialidade: 'Ortopedia', urgente: false },
  { id: 'f3', paciente: 'R. C. Alves', especialidade: 'Cardiologia', urgente: false },
];

export default function RegulaFacilDemo() {
  const [fila, setFila] = useState(FILA_INICIAL);
  const [selecionadoId, setSelecionadoId] = useState(FILA_INICIAL[1].id);

  const filaOrdenada = useMemo(
    () => [...fila].sort((a, b) => Number(b.urgente) - Number(a.urgente)),
    [fila]
  );

  function definirUrgencia(id, urgente) {
    setFila((atual) => atual.map((f) => (f.id === id ? { ...f, urgente } : f)));
  }

  const selecionado = fila.find((f) => f.id === selecionadoId);

  return (
    <div className="rf-demo">
      <p className="rf-demo__legenda">
        Recorte de demonstração — ficha de atendimento e reordenação
        automática da fila por prioridade.
      </p>

      <div className="rf-demo__corpo">
        <div className="rf-demo__ficha">
          <div className="rf-demo__ficha-topo">
            <span>ficha de atendimento</span>
            <span>Nº {selecionado.id.slice(1).padStart(3, '0')}</span>
          </div>
          <h4>{selecionado.paciente}</h4>
          <p className="rf-demo__ficha-especialidade">{selecionado.especialidade}</p>

          <div className="rf-demo__acoes">
            <button
              type="button"
              className={`rf-demo__botao ${selecionado.urgente ? 'is-ativo' : ''}`}
              onClick={() => definirUrgencia(selecionado.id, true)}
            >
              Confirmar urgência
            </button>
            <button
              type="button"
              className="rf-demo__botao rf-demo__botao--fraco"
              onClick={() => definirUrgencia(selecionado.id, false)}
            >
              Negar urgência
            </button>
          </div>
        </div>

        <div className="rf-demo__fila">
          <span className="rf-demo__fila-titulo">Fila — ordenada automaticamente</span>
          <ol>
            {filaOrdenada.map((f) => (
              <li
                key={f.id}
                className={`${f.urgente ? 'is-urgente' : ''} ${f.id === selecionadoId ? 'is-selecionado' : ''}`}
                onClick={() => setSelecionadoId(f.id)}
              >
                <span>{f.paciente}</span>
                {f.urgente && <span className="rf-demo__etiqueta">urgente</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
