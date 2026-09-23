import { perfil } from '../../data/profile';
import './Footer.css';

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="envelope footer__conteudo">
        <span>{perfil.nome} · {ano}</span>
        <div className="footer__links">
          {perfil.contatos.map((c) => (
            <a key={c.rotulo} href={c.url} target="_blank" rel="noreferrer">{c.rotulo}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
