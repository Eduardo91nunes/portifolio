import { useState } from 'react';
import './SiteEmbed.css';

export default function SiteEmbed({ url, titulo }) {
  const [carregado, setCarregado] = useState(false);

  return (
    <div className="site-embed">
      <div className="site-embed__barra">
        <span className="site-embed__url">{url}</span>
        <a href={url} target="_blank" rel="noreferrer" className="site-embed__nova-aba">
          abrir em nova aba ↗
        </a>
      </div>

      <div className="site-embed__moldura">
        {!carregado && <div className="site-embed__carregando">carregando site…</div>}
        <iframe
          src={url}
          title={`Site publicado — ${titulo}`}
          className="site-embed__iframe"
          onLoad={() => setCarregado(true)}
          loading="lazy"
        />
      </div>

      <p className="site-embed__nota">
        Se o site não aparecer aqui, é porque a hospedagem bloqueia a
        exibição em iframe — use o link acima para abrir em nova aba.
      </p>
    </div>
  );
}
