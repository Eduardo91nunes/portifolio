import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { perfil } from '../../data/profile';
import './Header.css';

const LINKS = [
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#experiencia', rotulo: 'Experiência' },
  { href: '#projetos', rotulo: 'Projetos' },
  { href: '#contato', rotulo: 'Contato' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="envelope header__conteudo">
        <a href="#topo" className="header__marca">
          {perfil.nome}
        </a>
        <nav className="header__nav" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.rotulo}</a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
