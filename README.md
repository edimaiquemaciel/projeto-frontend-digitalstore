# Digital Store - Projeto de Front-end

## Apresentação do Projeto

Bem-vindos ao projeto de Front-end do curso de Desenvolvimento Web! Este é um e-commerce moderno desenvolvido em React para venda de produtos esportivos, com foco em tênis e acessórios. 

Este projeto representa uma oportunidade para aplicar os conhecimentos adquiridos ao longo do curso, utilizando tecnologias modernas e boas práticas de desenvolvimento. A aplicação foi desenvolvida com base na [documentação do projeto Digital Store](https://github.com/digitalcollegebr/projeto-digital-store) e segue fielmente o design visual disponível no [Figma](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30).

## 🎯 Objetivo do Projeto

O objetivo deste projeto é desenvolver uma aplicação web completa utilizando React, implementando funcionalidades essenciais e seguindo os requisitos mínimos descritos na documentação oficial. O projeto final será avaliado com base em diversos critérios estabelecidos pelo curso.

## 🎓 Sobre o Desenvolvimento

Este projeto acadêmico permite aplicar na prática os conhecimentos adquiridos em:
- Desenvolvimento de aplicações React
- Consumo de APIs
- Gerenciamento de estado
- Boas práticas de desenvolvimento frontend

## 🌟 Visão Geral da Aplicação

O Digital Store é uma aplicação web responsiva que oferece uma experiência completa de compras online, incluindo navegação por produtos, visualização detalhada, sistema de filtros e uma interface intuitiva e moderna.

## ✨ Funcionalidades

- **Página Inicial**: Carousel de imagens em destaque, coleções e produtos em alta
- **Catálogo de Produtos**: Listagem completa com sistema de busca e filtros avançados
- **Visualização de Produto**: Galeria de imagens, detalhes, seleção de tamanho/cor e botão de compra
- **Navegação Intuitiva**: Menu responsivo com indicação da página atual
- **Sistema de Busca**: Busca inteligente por nome e categoria de produtos
- **Filtros Avançados**: Por marca, categoria, gênero e estado do produto

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca principal para construção da interface
- **React Router DOM 7.6.1** - Gerenciamento de rotas
- **Vite 6.3.5** - Build tool e servidor de desenvolvimento
- **Tailwind CSS 4.1.8** - Framework CSS utilitário

### UI Components
- **PrimeReact 10.9.5** - Biblioteca de componentes UI
- **PrimeIcons 7.0.0** - Ícones

### Backend/API
- **JSON Server 0.17.4** - Mock API para desenvolvimento

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e padronização de código
- **Vite Plugin React** - Integração React com Vite

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BuyBox.jsx      # Caixa de compra do produto
│   ├── FilterGroup.jsx # Grupo de filtros
│   ├── Footer.jsx      # Rodapé
│   ├── Gallery.jsx     # Galeria de imagens
│   ├── Header.jsx      # Cabeçalho
│   ├── Logo.jsx        # Componente do logo
│   ├── NavBar.jsx      # Barra de navegação
│   ├── ProductCard.jsx # Card de produto
│   ├── ProductListing.jsx # Listagem de produtos
│   ├── ProductOptions.jsx # Opções do produto (tamanho/cor)
│   ├── ScrollToTop.jsx # Scroll para o topo
│   └── Section.jsx     # Seção genérica
├── pages/              # Páginas da aplicação
│   ├── HomePage.jsx    # Página inicial
│   ├── Layout.jsx      # Layout principal
│   ├── ProductListingPage.jsx # Página de listagem
│   └── ProductViewPage.jsx    # Página de visualização
├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
├── main.jsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/edimaiquemaciel/projeto-frontend-digitalstore.git
cd digital-store
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação em `http://localhost:5173`

## 🎨 Design e Interface

O projeto implementa fielmente o design especificado no Figma, seguindo um sistema visual consistente:

- **Design System**: Cores consistentes com foco em #C92071 (rosa) e #FFB31F (laranja)
- **Tipografia**: Inter como fonte principal
- **Layout Responsivo**: Grid flexível que se adapta a diferentes tamanhos de tela
- **Componentes Reutilizáveis**: Arquitetura modular para fácil manutenção
- **Feedback Visual**: Hover effects, transições suaves e estados interativos

## 📱 Funcionalidades Detalhadas

### Página Inicial
- Carousel principal com chamadas promocionais
- Seção de coleções em destaque
- Produtos em alta com navegação para catálogo completo
- Oferta especial em destaque

### Catálogo de Produtos
- Sistema de busca por texto
- Filtros por marca, categoria, gênero e estado
- Ordenação por preço
- Cards de produto com informações essenciais
- Navegação para página de detalhes

### Página do Produto
- Galeria de imagens com thumbnails
- Informações detalhadas (nome, referência, avaliações, preço)
- Seleção de tamanho e cor
- Produtos relacionados
- Breadcrumb de navegação

## 🔧 Configurações

### Tailwind CSS
O projeto utiliza Tailwind CSS 4.x com configurações customizadas para:
- Cores do tema
- Espaçamentos específicos
- Componentes personalizados

### PrimeReact
Componentes UI configurados com tema personalizado:
- Rating stars customizadas
- Galleria com estilos próprios
- Dropdown com template personalizado

## 🌐 API Externa

A aplicação consome dados de uma API externa hospedada em:
```
https://digital-store-server-production.up.railway.app/
```

Endpoints utilizados:
- `/allProducts` - Lista todos os produtos
- `/allProductsDetails` - Detalhes dos produtos
- `/imagesSlideHome` - Imagens do carousel
- `/imageCollection` - Coleções em destaque
- `/imagesWithThumb` - Galeria de imagens com thumbnails

## 🔄 Estado da Aplicação

O gerenciamento de estado é feito através de:
- **useState** para estados locais dos componentes
- **useEffect** para efeitos colaterais e carregamento de dados
- **React Router** para estado de navegação
- **URL Search Params** para filtros e busca

## 🚦 Tratamento de Erros

- Sistema de retry automático para falhas de rede
- Estados de loading durante carregamento de dados
- Mensagens de erro amigáveis ao usuário
- Fallbacks para quando dados não estão disponíveis

## 📚 Recursos de Referência

- [Documentação do Projeto Digital Store](https://github.com/digitalcollegebr/projeto-digital-store)
- [Design no Figma](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30)
- [Documentação do React](https://react.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)

## 🎯 Critérios de Avaliação

Este projeto foi desenvolvido seguindo os critérios de avaliação estabelecidos pelo curso:
- Implementação das funcionalidades essenciais
- Qualidade do código e organização
- Fidelidade ao design proposto
- Responsividade e usabilidade
- Uso adequado das tecnologias

## 👥 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

**Digital Store** - Projeto acadêmico desenvolvido com ❤️ usando React e Tailwind CSS como parte do curso de Desenvolvimento Web Full Stack
