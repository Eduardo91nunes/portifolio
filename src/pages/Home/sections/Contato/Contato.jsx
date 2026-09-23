import { perfil } from '../../../../data/profile';
import IconeRedeSocial from '../../../../components/SocialIcons/SocialIcons';
import './Contato.css';

export default function Contato() {
  return (
    <section id="contato" className="secao contato">
      <div className="envelope contato__grade">
        <div>
          <span className="rotulo-secao">contato</span>
          <h2 className="contato__titulo">Vamos conversar sobre o próximo projeto.</h2>
        </div>

        <ul className="contato__lista">
          {perfil.contatos.map((c) => (
            <li key={c.rotulo}>
              <a href={c.url} target="_blank" rel="noreferrer" aria-label={c.rotulo} data-rede={c.rotulo}>
                <span className="contato__rotulo">{c.rotulo}</span>
                <IconeRedeSocial rede={c.rotulo} className="contato__icone" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}