import { whatsappLink } from '../lib/whatsapp'
import Button from './Button'
import Container from './Container'
import Reveal from './Reveal'
import SmartImage from './SmartImage'

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-brown/70">
                <span className="h-px w-8 bg-brown/30" aria-hidden="true" />
                <span>Produção artesanal</span>
                <span className="text-brown/30" aria-hidden="true">
                  •
                </span>
                <span>Ingredientes selecionados</span>
              </p>

              <h1
                id="hero-title"
                className="mt-7 font-serif text-[2.7rem] font-light leading-[1.07] tracking-[-0.015em] text-ink sm:text-[3.5rem] lg:text-[4rem]"
              >
                Pequenos momentos, <em className="italic text-brown">grandes sabores.</em>
              </h1>

              <p className="mt-7 max-w-[28rem] text-[15px] leading-[1.75] text-brown/80">
                Da primeira fornada do dia à última xícara de café, cada detalhe é preparado
                com cuidado para transformar sua rotina em um momento especial.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button href="#produtos">Conheça nossos produtos</Button>
                <Button href={whatsappLink()} variant="outline">
                  Faça seu pedido
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120} className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 hidden h-20 w-20 border-l border-t border-terracotta/40 lg:block"
              />
              <SmartImage
                src="/images/hero.jpg"
                alt="Pães artesanais rústicos recém-assados, com farinha e espigas de trigo sobre a mesa"
                priority
                className="aspect-[4/3] w-full rounded-[2px]"
                imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
              />
              <p className="mt-3 text-[11px] tracking-[0.02em] text-brown/55">
                Fornada da manhã — pães de fermentação natural.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
