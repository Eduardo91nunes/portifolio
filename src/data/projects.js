import MknDemo from '../prototypes/MknDemo/MknDemo';
import AesunaDemo from '../prototypes/AesunaDemo/AesunaDemo';
import TccDemo from '../prototypes/TccDemo/TccDemo';


export const projetos = [
  {
    id: 'mkn',
    nome: 'MKN',
    categoria: 'Site institucional ambiental',
    resumo: 'Site institucional para uma consultoria ambiental, com catálogo de serviços (outorga, PGRS, licenciamento) e cases de projetos.',
    stack: ['React', 'Tailwind CSS', 'React Router'],
    repoPrivado: false,
    repoUrl: 'https://github.com/Eduardo91nunes/MKN-BACKUP',
    demoUrl: 'https://mkn-beta.vercel.app/',
   //Prototipo: MknDemo,
  },
  {
    id: 'aesuna',
    nome: 'AESUNA',
    categoria: 'Portal de associação estudantil',
    resumo: 'Portal de associação estudantil com login, lançamentos financeiros do transporte e prestação de contas.',
    stack: ['React', 'Firebase', 'jsPDF', 'React Router'],
    repoPrivado: false,
    repoUrl: 'https://github.com/Eduardo91nunes/AESUNA-BACKUP',
    demoUrl: null,
    Prototipo: AesunaDemo,
  },
  {
    id: 'tcc',
    nome: 'TCC',
    categoria: 'Sistema de gerenciamento de estoque',
    resumo: 'Sistema de estoque desenvolvido para apresentação do TCC, com cadastro de produtos e controle de entradas e saídas.',
    stack: ['React', 'Firebase', 'React Router'],
    repoPrivado: false,
    repoUrl: 'https://github.com/Eduardo91nunes/TCC',
    demoUrl: null,
    Prototipo: TccDemo,
  },
];
