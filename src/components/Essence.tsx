import { Heart, Leaf, Wheat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Container from './Container'
import Reveal from './Reveal'

type Differential = {
  icon: LucideIcon
  title: string
  description: string
}

const differentials: Differential[] = [
  {
    icon: Leaf,
    title: 'Ingredientes selecionados',
    description:
      'Farinhas, manteigas e grãos escolhidos a cada lote, sempre que possível de produtores locais.',
  },
  {
    icon: Wheat,
    title: 'Produção cuidadosa',
    description:
      'Fermentações longas, fornadas diárias e atenção em cada etapa — sem atalhos.',
  },
  {
    icon: Heart,
    title: 'Sabor que acolhe',
    description:
      'Receitas que trazem memória e conforto para a mesa, do café da manhã ao fim da tarde.',
  },
]

export default function Essence() {
  return (
    <section
      id="historia"
      aria-labelledby="essence-title"
      className="border-t border-brown/10 bg-white py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.18em] text-terracotta">Nossa essência</p>
              <h2
                id="essence-title"
                className="mt-5 font-serif text-[2rem] font-light leading-[1.15] text-ink sm:text-[2.5rem] lg:text-[2.7rem]"
              >
                Mais do que pão.
                <br />
                Uma tradição de cuidado.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <p className="max-w-[36rem] text-[15.5px] leading-[1.8] text-brown/80">
                Acreditamos que os melhores sabores nascem da simplicidade. Por isso, valorizamos
                bons ingredientes, processos cuidadosos e o prazer de preparar alimentos que fazem
                parte dos melhores momentos da vida.
              </p>

              <ul className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
                {differentials.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="border-t border-brown/15 pt-6">
                    <Icon size={20} strokeWidth={1.25} className="text-terracotta" aria-hidden="true" />
                    <h3 className="mt-5 text-[13px] font-medium uppercase tracking-[0.08em] text-ink">
                      {title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.7] text-brown/70">{description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
