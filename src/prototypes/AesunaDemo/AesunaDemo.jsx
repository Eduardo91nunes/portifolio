import { useMemo, useState } from 'react';
import './AesunaDemo.css';

const TIPOS = ['Mensalidade de Ônibus', 'Contabilidade', 'Devolução Caroneiro'];

const LANCAMENTOS_INICIAIS = [
  { id: 1, tipo: 'Mensalidade de Ônibus', natureza: 'ENTRADA', valor: 120 },
  { id: 2, tipo: 'Contabilidade', natureza: 'SAIDA', valor: 80 },
  { id: 3, tipo: 'Devolução Caroneiro', natureza: 'SAIDA', valor: 30 },
];

function formatarReal(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function AesunaDemo() {
  const [lancamentos, setLancamentos] = useState(LANCAMENTOS_INICIAIS);
  const [tipo, setTipo] = useState(TIPOS[0]);
  const [natureza, setNatureza] = useState('ENTRADA');
  const [valor, setValor] = useState('');
  const [filtro, setFiltro] = useState('todos');

  function adicionarLancamento(e) {
    e.preventDefault();
    const numero = Number(valor);
    if (!numero) return;
    setLancamentos((atual) => [
      ...atual,
      { id: Date.now(), tipo, natureza, valor: numero },
    ]);
    setValor('');
  }

  const lancamentosFiltrados = useMemo(
    () => (filtro === 'todos' ? lancamentos : lancamentos.filter((l) => l.tipo === filtro)),
    [lancamentos, filtro]
  );

  const total = lancamentosFiltrados.reduce(
    (acc, l) => (l.natureza === 'ENTRADA' ? acc + l.valor : acc - l.valor),
    0
  );

  return (
    <div className="aesuna-demo">
      <p className="aesuna-demo__legenda">
        Recorte de demonstração — lançamento de valores do transporte
        estudantil e prestação de contas com saldo em tempo real.
      </p>

      <form className="aesuna-demo__form" onSubmit={adicionarLancamento}>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={natureza} onChange={(e) => setNatureza(e.target.value)}>
          <option value="ENTRADA">Entrada</option>
          <option value="SAIDA">Saída</option>
        </select>
        <input
          type="number"
          placeholder="Valor (R$)"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="submit">Lançar</button>
      </form>

      <div className="aesuna-demo__corpo">
        <div className="aesuna-demo__lista">
          <div className="aesuna-demo__filtro">
            <span>Prestação de contas</span>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="todos">Todos os tipos</option>
              {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <ul>
            {lancamentosFiltrados.map((l) => (
              <li key={l.id} className={l.natureza === 'ENTRADA' ? 'is-entrada' : 'is-saida'}>
                <span>{l.tipo}</span>
                <span>{l.natureza === 'ENTRADA' ? '+' : '−'} {formatarReal(l.valor)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="aesuna-demo__saldo">
          <span>Saldo</span>
          <strong className={total >= 0 ? 'is-positivo' : 'is-negativo'}>{formatarReal(total)}</strong>
        </div>
      </div>
    </div>
  );
}
