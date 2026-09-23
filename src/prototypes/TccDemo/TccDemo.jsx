import { useMemo, useState } from 'react';
import './TccDemo.css';

const PRODUTOS_INICIAIS = [
  { id: 1, nome: 'Parafuso M6', quantidade: 240 },
  { id: 2, nome: 'Chapa de aço 2mm', quantidade: 18 },
  { id: 3, nome: 'Tinta industrial 18L', quantidade: 6 },
];

export default function TccDemo() {
  const [produtos, setProdutos] = useState(PRODUTOS_INICIAIS);
  const [busca, setBusca] = useState('');

  function alterarQuantidade(id, delta) {
    setProdutos((atual) =>
      atual.map((p) => (p.id === id ? { ...p, quantidade: Math.max(0, p.quantidade + delta) } : p))
    );
  }

  const produtosFiltrados = useMemo(
    () => produtos.filter((p) => p.nome.toLowerCase().includes(busca.toLowerCase())),
    [produtos, busca]
  );

  return (
    <div className="tcc-demo">
      <p className="tcc-demo__legenda">
        Recorte de demonstração — busca de produtos e controle de entradas e
        saídas de estoque em tempo real.
      </p>

      <input
        className="tcc-demo__busca"
        type="search"
        placeholder="Buscar produto…"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <table className="tcc-demo__tabela">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Movimentar</th>
          </tr>
        </thead>
        <tbody>
          {produtosFiltrados.map((p) => (
            <tr key={p.id} className={p.quantidade < 10 ? 'is-baixo' : ''}>
              <td>{p.nome}</td>
              <td className="tcc-demo__quantidade">{p.quantidade}</td>
              <td>
                <div className="tcc-demo__acoes">
                  <button type="button" onClick={() => alterarQuantidade(p.id, -1)} aria-label={`Saída de ${p.nome}`}>saída</button>
                  <button type="button" onClick={() => alterarQuantidade(p.id, 1)} aria-label={`Entrada de ${p.nome}`}>entrada</button>
                </div>
              </td>
            </tr>
          ))}
          {produtosFiltrados.length === 0 && (
            <tr><td colSpan={3} className="tcc-demo__vazio">Nenhum produto encontrado.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
