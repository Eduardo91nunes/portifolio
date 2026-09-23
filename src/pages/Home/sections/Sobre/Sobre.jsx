import { useState } from 'react';
import { perfil } from '../../../../data/profile';
import { competencias } from '../../../../data/experience';
import IconeTecnologia from '../../../../components/TechIcons/TechIcons';
import './Sobre.css';

export default function Sobre() {
  const [fotoQuebrada, setFotoQuebrada] = useState(false);

  return (
    <section id="sobre" className="secao sobre">
      <div className="envelope sobre__grade">
        <div>
          <span className="rotulo-secao">sobre</span>

          <div className="sobre__perfil">
            {perfil.fotoUrl && !fotoQuebrada && (
              <img
                className="sobre__foto"
                src={perfil.fotoUrl}
                alt={perfil.nome}
                onError={() => setFotoQuebrada(true)}
              />
            )}
            <div className="sobre__paragrafos">
              {perfil.bioParagrafos.map((paragrafo, i) => (
                <p key={i}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="sobre__competencias">
          <span className="sobre__competencias-titulo">Ferramentas do dia a dia</span>
          <div className="sobre__tags">
            {competencias.map((c) => (
              <span className="sobre__tech" data-tech={c} key={c} title={c} aria-label={c}>
                <IconeTecnologia nome={c} className="sobre__tech-icone" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}