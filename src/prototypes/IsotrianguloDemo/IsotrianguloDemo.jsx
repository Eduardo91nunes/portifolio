import { useMemo, useState } from 'react';
import './IsotrianguloDemo.css';

const PRODUTOS = [
  { id: 'p1', nome: 'Placa EPS 100mm', unidade: 'chapa', preco: 89 },
  { id: 'p2', nome: 'Bloco EPS para laje', unidade: 'unid.', preco: 34 },
  { id: 'p3', nome: 'Isolamento térmico EPS', unidade: 'm²', preco: 22 },
];

function Caixa({ preenchido }) {
  return (
    <svg viewBox="0 0 64 64" className="iso-demo__icone">
      <rect x="6" y="6" width="52" height="52" rx="4"
        fill={preenchido ? 'var(--cor-secundaria)' : 'var(--cor-fundo-elevado)'}
        stroke="var(--cor-tinta-suave)" strokeWidth="2" />
      <path d="M6 22 L58 22 M32 22 L32 58" stroke="var(--cor-fundo)" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

export default function IsotrianguloDemo() {
  const [carrinho, setCarrinho] = useState({});
  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  function alterarQuantidade(id, delta) {
    setPedidoEnviado(false);
    setCarrinho((atual) => {
      const proxima = Math.max(0, (atual[id] || 0) + delta);
      return { ...atual, [id]: proxima };
    });
  }

  const itensNoCarrinho = useMemo(
    () => PRODUTOS.filter((p) => carrinho[p.id] > 0),
    [carrinho]
  );

  const total = itensNoCarrinho.reduce((soma, p) => soma + p.preco * carrinho[p.id], 0);

  const mensagemWhatsapp = useMemo(() => {
    if (itensNoCarrinho.length === 0) return '';
    const linhas = itensNoCarrinho.map((p) => `• ${carrinho[p.id]}x ${p.nome}`);
    return `Olá! Gostaria de orçar:\n${linhas.join('\n')}\nTotal estimado: R$ ${total.toFixed(2)}`;
  }, [itensNoCarrinho, carrinho, total]);

  return (
    <div className="iso-demo">
      <p className="iso-demo__legenda">
        Recorte de demonstração — catálogo com carrinho e finalização via
        WhatsApp, como na vitrine real.
      </p>

      <div className="iso-demo__grade">
        {PRODUTOS.map((p) => (
          <div className="iso-demo__produto" key={p.id}>
            <Caixa preenchido={carrinho[p.id] > 0} />
            <div className="iso-demo__produto-info">
              <span className="iso-demo__produto-nome">{p.nome}</span>
              <span className="iso-demo__produto-preco">R$ {p.preco.toFixed(2)} / {p.unidade}</span>
            </div>
            <div className="iso-demo__contador">
              <button type="button" onClick={() => alterarQuantidade(p.id, -1)} aria-label={`Remover ${p.nome}`}>−</button>
              <span>{carrinho[p.id] || 0}</span>
              <button type="button" onClick={() => alterarQuantidade(p.id, 1)} aria-label={`Adicionar ${p.nome}`}>+</button>
            </div>
          </div>
        ))}
      </div>

      {itensNoCarrinho.length > 0 && (
        <div className="iso-demo__resumo">
          <div className="iso-demo__resumo-total">
            <span>Total estimado</span>
            <strong>R$ {total.toFixed(2)}</strong>
          </div>
          <button type="button" className="iso-demo__botao" onClick={() => setPedidoEnviado(true)}>
            Finalizar pedido pelo WhatsApp
          </button>

          {pedidoEnviado && (
            <div className="iso-demo__bolha-whatsapp">
              <span className="iso-demo__bolha-rotulo">prévia da mensagem</span>
              <p>{mensagemWhatsapp}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
