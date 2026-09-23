import { useTema } from '../../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { tema, alternarTema } = useTema();
  const proximoTema = tema === 'dia' ? 'noite' : 'dia';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={alternarTema}
      aria-label={`Mudar para o modo ${proximoTema}`}
      title={`Mudar para o modo ${proximoTema}`}
    >
      <span className="theme-toggle__trilho">
        <span className="theme-toggle__marcador" />
      </span>
      <span className="theme-toggle__texto">{tema === 'dia' ? 'papel' : 'painel'}</span>
    </button>
  );
}
