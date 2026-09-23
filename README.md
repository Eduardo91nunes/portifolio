# Portfólio — Eduardo Nunes

Portfólio em React (Vite) + CSS puro, com protótipos interativos dos
projetos (já que os repositórios reais são privados e não estão hospedados
em lugar nenhum).

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview   # serve o build em localhost para conferir
```

## Onde editar cada coisa

Tudo que é **conteúdo** fica isolado em `src/data/`, então dá para
atualizar o site inteiro sem mexer em nenhum componente:

- `src/data/profile.js` — nome, bio, disponibilidade e links de contato.
  **Os textos aqui são placeholders** (marcados com `TODO`) — substitua
  pelo conteúdo atualizado que você vai definir.
- `src/data/experience.js` — experiências profissionais, formação,
  certificações e a lista de competências. Também com placeholders.
- `src/data/projects.js` — a lista de projetos exibidos na seção
  "Projetos". Cada item aponta para um componente `Prototipo`.

## Estrutura de pastas

```
src/
  components/       componentes reutilizáveis (cada um com sua .css)
    Header/
    Footer/
    ThemeToggle/    alternância entre o modo "papel" (claro) e "painel" (escuro)
    ProjectCard/    a "ficha técnica" de cada projeto na grade
    ProjectModal/   a janela que abre o protótipo interativo
    Tag/
    Timeline/
  context/
    ThemeContext.jsx  guarda o tema escolhido (persiste no localStorage)
  data/               conteúdo do site (ver seção acima)
  pages/
    Home/
      Home.jsx        junta as seções na ordem em que aparecem
      sections/
        Hero/
        Sobre/
        Experiencia/
        Projetos/
        Contato/
  prototypes/         os protótipos interativos de cada projeto
    AgroPainelDemo/
    IsotrianguloDemo/
    RegulaFacilDemo/
  styles/
    tokens.css        cores, tipografia e espaçamento (os dois temas ficam aqui)
    globals.css       reset e estilos base
```

Cada componente, seção e protótipo tem sua própria pasta com o `.jsx` e o
`.css` lado a lado — se algo quebrar visualmente, o arquivo de estilo
correspondente está sempre ao lado do componente que ele estiliza.

## Como funciona o "protótipo" de cada projeto

Como o AgroPainel, o RegulaFácil e a vitrine da Isotriângulo estão em
repositórios privados, cada card de projeto não linka para um site
hospedado — ele abre um modal (`ProjectModal`) com um componente React
de verdade, guardado em `src/prototypes/`, que recria de forma
simplificada e **realmente interativa** uma fatia representativa da
interface (ex.: o mapa de talhões e o construtor de indicador do
AgroPainel, o carrinho com prévia de WhatsApp da Isotriângulo, a fila de
prioridade do RegulaFácil). Isso deixa claro para quem visita que é uma
demonstração, e não o sistema real.

### Adicionando um novo projeto

1. Crie uma pasta em `src/prototypes/NomeDoProjetoDemo/` com o `.jsx` e o `.css`.
2. Importe o componente e adicione um objeto em `src/data/projects.js`.

Não precisa tocar em `ProjectCard` nem em `ProjectModal` — os dois já
funcionam para qualquer projeto novo que você adicionar na lista.

## Tema dia/noite

O conceito visual é o de uma caderneta de campo: modo **papel** (claro)
e modo **painel** (escuro, como um console de monitoramento à noite).
As cores de cada modo estão em `src/styles/tokens.css`, nas variáveis
CSS de `:root` e `[data-tema='noite']`.

## Fontes

O site usa Fraunces (títulos), Public Sans (corpo) e IBM Plex Mono
(rótulos técnicos), carregadas via Google Fonts em `src/styles/globals.css`.
Isso exige conexão com a internet; para uso 100% offline, baixe as fontes
e sirva localmente.

## Pendências antes de publicar

- [ ] Substituir os textos de exemplo em `src/data/profile.js` e `src/data/experience.js`
- [ ] Adicionar uma foto real em `public/eduardo.jpg` (ou remover a referência em `profile.js`)
- [ ] Conferir se os links de contato ainda estão corretos
- [ ] Rodar `npm run build` e publicar a pasta `dist/` (Netlify, Vercel, GitHub Pages etc.)
