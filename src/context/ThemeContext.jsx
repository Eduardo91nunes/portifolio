import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

const CHAVE_ARMAZENAMENTO = 'portfolio-eduardo:tema';

function lerTemaInicial() {
  if (typeof window === 'undefined') return 'dia';
  const salvo = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
  if (salvo === 'dia' || salvo === 'noite') return salvo;
  const prefereEscuro = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefereEscuro ? 'noite' : 'dia';
}

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(lerTemaInicial);

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema);
    window.localStorage.setItem(CHAVE_ARMAZENAMENTO, tema);
  }, [tema]);

  function alternarTema() {
    setTema((atual) => (atual === 'dia' ? 'noite' : 'dia'));
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTema() {
  const contexto = useContext(ThemeContext);
  if (!contexto) {
    throw new Error('useTema precisa ser usado dentro de um ThemeProvider');
  }
  return contexto;
}
