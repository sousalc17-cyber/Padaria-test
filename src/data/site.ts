export type NavLink = {
  label: string
  href: string
}

export type Product = {
  name: string
  description: string
  image: string
  alt: string
}

export type GalleryImage = {
  src: string
  alt: string
}

/**
 * Conteúdo institucional da marca.
 * Todos os dados de contato são fictícios e servem apenas à demonstração.
 */
export const site = {
  name: 'Pão & Afeto',
  institutionalPhrase: 'Feito com tempo, servido com carinho.',
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Nossa História', href: '#historia' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Contato', href: '#contato' },
  ] as NavLink[],
  whatsapp: {
    /** Número fictício de demonstração — substitua pelo número real. */
    number: '5511999990000',
    display: '(11) 99999-0000',
    message: 'Olá! Gostaria de fazer um pedido na Pão & Afeto.',
  },
  instagram: {
    handle: '@paoeafeto',
    url: 'https://www.instagram.com/paoeafeto',
  },
  address: {
    street: 'Rua das Oliveiras, 128 — Vila Madalena',
    city: 'São Paulo — SP, 05435-000',
  },
  hours: [
    'Terça a sexta — 7h às 19h',
    'Sábado e domingo — 7h às 15h',
    'Segunda-feira — fechado',
  ],
}

export const products: Product[] = [
  {
    name: 'Pães artesanais',
    description:
      'Fermentação natural, casca crocante e miolo úmido. Assados todos os dias, desde cedo.',
    image: '/images/produtos-paes.jpg',
    alt: 'Pão de fermentação natural coberto com farinha sobre uma superfície clara',
  },
  {
    name: 'Bolos e doces',
    description:
      'Bolos de receita simples, tortas e doces em pequenas quantidades — do jeito de casa.',
    image: '/images/produtos-doces.jpg',
    alt: 'Bolo de chocolate artesanal com cobertura cremosa',
  },
  {
    name: 'Salgados especiais',
    description:
      'Focaccias, empadas e pães recheados para acompanhar o café ou a pausa do dia.',
    image: '/images/produtos-salgados.jpg',
    alt: 'Focaccia artesanal com tomates, cebola e alecrim sobre madeira escura',
  },
  {
    name: 'Cafés e bebidas',
    description:
      'Espresso, cafés coados e bebidas com leite preparados com grãos frescos.',
    image: '/images/produtos-cafes.jpg',
    alt: 'Xícaras de café com desenhos de latte art seguradas por duas pessoas',
  },
]

export const gallery: GalleryImage[] = [
  {
    src: '/images/galeria-1.jpg',
    alt: 'Pão rústico fatiado sobre uma tábua de madeira',
  },
  {
    src: '/images/galeria-2.jpg',
    alt: 'Croissant dourado recebendo uma chuva de farinha',
  },
  {
    src: '/images/galeria-3.jpg',
    alt: 'Xícaras de café com latte art ao lado de plantas',
  },
  {
    src: '/images/galeria-4.jpg',
    alt: 'Ambiente da panificadora com mesas de madeira e luz natural',
  },
  {
    src: '/images/galeria-5.jpg',
    alt: 'Cesta de croissants recém-saídos do forno',
  },
  {
    src: '/images/galeria-6.jpg',
    alt: 'Pães de canela polvilhados com açúcar em uma assadeira escura',
  },
]
