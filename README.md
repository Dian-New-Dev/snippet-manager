# Projeto Snippet Manager

## Descrição

Aplicação web desenvolvida com React e Typescript voltada a proporcionar um ambiente de aprendizado e organização de conhecimentos a estudantes de programação.

A aplicação se propõe a fornecer um espaço para a submissão de snippets de código comentados, organizados e acessíveis de qualquer lugar.

## Funcionalidades

- Criação de conta pessoal;
- Editor de texto embutido;
- Campo para uma descrição geral do que o snippet faz;
- Comentários sobre porções do código, visualizáveis por hover do mouse;
- Tags indicando linguagem ou tecnologia relacionada com o snippet;
- Filtragem e organização de snippets via tags;
- Trasnformar o snippet em um link compartilhável.

## Tecnologias usadas:

- React: construção de interface;
- Typescript: tipagem;
- Vite: configuração inicial do projeto;
- Tailwind: estilização;
- NodeJS: ambiente de desenvolvimento e backend futuro;
- API/Rest: comunicação front/back futura;
- Redux: possibilidade, gerenciamento de estado.

## Estrutura básica:

### Fontend:

- src/: código fonte;
- componentes/: componentes reutilizáveis;
- pages/: páginas da aplicação;
- services/: funções de chamada API;
- store/: opcional, caso redux seja usado.

### Backend:

- src/: código fonte do servidor;
- controllers/: lógica de controle;
- models/: modelos de dados;
- routes/: definição de rotas;
- config/: banco de dados e autenticação.

## Objetivos do Projeto

1) Criar uma ferramenta de aprendizado útil para mim e, possivelmente, para outros estudantes de programação;

2) Me desafiar com um projeto que envolve diversas tecnologias, ferramentas e skills demandadas pelo atual mercado de trabalho em desenvolvimento frontend: react, typescript, postCSS, API Rest, CI/CD, desenvolvimento full stack. 


## Plano de Desenvolvimento

1) Criação do projeto com Vite;

2) Implementar funcionalidades relativas à autenticação de usuário;

- Investigar o que é react-router-dom;
- Criar páginas de login e registro;
- Configurar rotas para autenticação;
- Criar backend de autenticação com NodeJS e JWT;

3) Criar interface de gerenciamento de snippets;

- Criar componentes reutilizáveis;
- Adicionar o editor de text;
- Adicionar tooltips para os comentários via hover;

4) Implementar funcionalidades CRUD de snippets;

- Definir rotas no backend para snipptes;
- Conectar front com back;

5) Testtar e iterar

## Log de desenvolvimento

1) Criei projeto React + Typescript com Vite
2) Adicionei e configurei Tailwind
3) Remanejei a estrutura de pastas
- Criei as pastas components, pages, services e store dentro de src
- Movi o arquivo App.tsx para a pasta pages. Como pretendo um aplicativo com várias páginas, essa alteração se tornou necessária.
- Atualizei a localização de app.tsx no main.tsx
4) Commit inicial
5) Instalei react-router-dom
6) Importei Browser Router no main.tsx e envolvi o <App /> em <Router></Router>.
7) Commit: instalei react-router-dom
8) Configurei App.tsx para usar rotas e acessar a Página Inicial (cujo arquivo tsx criei em pages)
9) Rodei npm run dev para ver se o texto teste no componente Home está renderizando. Sucesso.
10) Commit: tudo pronto para começar.

## Aprendizado

- npm run dev deve ser rodado na pasta raiz, pois é ali que o arquivo package.json fica. 
- para aplicativos e sites de página única, deixar o App.tsx junto com os demais arquivos em src basta.
- para sites e aplicativos com múltiplas páginas, o App.tsx deve ser movido para uma pasta "pages" junto os arquivos individuais de cada página.
- a opção por um web app de várias páginas exige a instalação de react-router-dom na pagina raiz e a configuração do mesmo em App.tsx;