import { products } from '../data/site'
import Container from './Container'
import Reveal from './Reveal'
import SmartImage from './SmartImage'

export default function Products() {
  return (
    <section id="produtos" aria-labelledby="products-title" className="bg-cream py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="lg:max-w-[34rem]">
            <p className="text-[10px] uppercase tracking-[0.18em] text-terracotta">Nossos produtos</p>
            <h2
              id="products-title"
              className="mt-5 font-serif text-[2rem] font-light leading-[1.15] text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
            >
              Feitos para despertar seus sentidos.
            </h2>
          </Reveal>

          <Reveal delay={100} className="lg:max-w-[22rem]">
            <p className="text-[14px] leading-[1.8] text-brown/70">
              Uma seleção enxuta, feita em pequenas quantidades todos os dias. O que sai do forno
              pela manhã costuma acabar antes do fim da tarde.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-10">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 80}>
              <article className="group">
                <SmartImage
                  src={product.image}
                  alt={product.alt}
                  className="aspect-[4/3] w-full rounded-[2px]"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-brown/10 pb-6">
                  <div>
                    <h3 className="font-serif text-[1.35rem] font-normal text-ink">{product.name}</h3>
                    <p className="mt-2 max-w-[26rem] text-[13.5px] leading-[1.7] text-brown/70">
                      {product.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-serif text-[13px] text-brown/40"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
