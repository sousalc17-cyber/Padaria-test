# Pão & Afeto

Landing page para uma panificadora artesanal e cafeteria fictícia. Projeto 100% front-end, sem backend, construído com React, TypeScript, Vite e Tailwind CSS.

> Todos os dados de contato (WhatsApp, endereço, Instagram) são fictícios e servem apenas à demonstração.

## Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- Fontes: Fraunces (títulos) e Inter (textos), via Google Fonts

## Como executar

Requisitos: Node.js 18 ou superior.

```bash
npm install     # instala as dependências
npm run dev     # ambiente de desenvolvimento em http://localhost:3000
npm run build   # build de produção em /dist
npm run preview # pré-visualiza o build de produção
```

O servidor de desenvolvimento roda em `http://localhost:3000`. Para acessá-lo por um túnel ou preview remoto, informe o domínio em `VITE_DEV_ALLOWED_HOSTS` (separados por vírgula) — por exemplo `VITE_DEV_ALLOWED_HOSTS=meu-preview.exemplo.com npm run dev`. Em produção isso não é necessário.

## Estrutura do projeto

```
.
├── public/
│   ├── favicon.svg
│   └── images/            # fotografias otimizadas (JPEG progressivo)
├── src/
│   ├── components/
│   │   ├── Button.tsx     # link estilizado (variações solid / outline / light)
│   │   ├── CallToAction.tsx
│   │   ├── Container.tsx  # largura máxima e espaçamentos laterais
│   │   ├── Craft.tsx      # destaque artesanal
│   │   ├── Essence.tsx    # nossa essência + diferenciais
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx    # galeria editorial
│   │   ├── Header.tsx     # cabeçalho fixo + menu mobile
│   │   ├── Hero.tsx
│   │   ├── Products.tsx
│   │   ├── Reveal.tsx     # animação discreta ao entrar na tela
│   │   └── SmartImage.tsx # imagem com lazy loading e fallback
│   ├── data/
│   │   └── site.ts        # conteúdo institucional, produtos e galeria
│   ├── lib/
│   │   └── whatsapp.ts    # geração do link do WhatsApp
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html             # meta tags, SEO, fontes e favicon
├── tailwind.config.js     # paleta e tipografia da marca
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Personalização

- **Contato e conteúdo**: edite `src/data/site.ts`. O número do WhatsApp está em `src/data/site.ts` (`site.whatsapp.number`, apenas dígitos com DDI) e é usado por todos os botões através de `src/lib/whatsapp.ts`.
- **Cores e fontes**: `tailwind.config.js` e `src/index.css`.
- **Imagens**: substitua os arquivos em `public/images/` mantendo os mesmos nomes. O componente `SmartImage` exibe um substituto discreto caso alguma imagem falhe ao carregar.

## Deploy na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Na Vercel, importe o repositório.
3. A Vercel detecta o Vite automaticamente: build `npm run build`, output `dist`.
4. Nenhuma variável de ambiente é necessária.

Também funciona em qualquer hospedagem estática (Netlify, Cloudflare Pages, GitHub Pages) publicando a pasta `dist`.

## Acessibilidade e boas práticas

- HTML semântico (`header`, `main`, `section`, `article`, `footer`, `address`).
- Link "Ir para o conteúdo", navegação por teclado, foco visível e `aria-label` nos ícones.
- Menu mobile fecha com `Esc`, trava a rolagem e atualiza `aria-expanded`.
- Animações respeitam `prefers-reduced-motion`.
- Imagens com `alt` descritivo, `loading="lazy"` (exceto o hero) e `decoding` assíncrono.

## Créditos das fotografias

Fotografias de [Unsplash](https://unsplash.com) e [Pexels](https://pexels.com), sob suas licenças de uso livre. Arquivos locais otimizados para o projeto.
