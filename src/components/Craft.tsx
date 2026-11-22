import Container from './Container'
import Reveal from './Reveal'
import SmartImage from './SmartImage'

export default function Craft() {
  return (
    <section aria-labelledby="craft-title" className="bg-beige/45 py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
          <Reveal>
            <SmartImage
              src="/images/artesanal.jpg"
              alt="Mãos de padeiro sovando a massa sobre uma bancada enfarinhada"
              className="aspect-[4/3] w-full rounded-[2px] lg:aspect-[5/4]"
            />
          </Reveal>

          <Reveal delay={140}>
            <div className="bg-cream px-7 py-10 sm:px-12 sm:py-14 lg:-ml-16 lg:px-14 lg:py-16">
              <p className="text-[10px] uppercase tracking-[0.18em] text-terracotta">
                Destaque artesanal
              </p>
              <h2
                id="craft-title"
                className="mt-5 font-serif text-[1.9rem] font-light leading-[1.18] text-ink sm:text-[2.4rem] lg:text-[2.6rem]"
              >
                Cada fornada tem seu próprio tempo.
              </h2>
              <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.8] text-brown/80">
                Respeitamos os ingredientes, valorizamos os processos e acreditamos que o cuidado
                pode ser percebido em cada detalhe.
              </p>
              <div className="mt-9 flex items-center gap-3">
                <span className="h-px w-10 bg-terracotta/50" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-brown/60">
                  Fermentação natural
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
