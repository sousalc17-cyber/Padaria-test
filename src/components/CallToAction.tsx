import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/whatsapp'
import Button from './Button'
import Container from './Container'
import Reveal from './Reveal'

export default function CallToAction() {
  return (
    <section id="contato" aria-labelledby="cta-title" className="bg-ink py-24 text-cream lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-[38rem] text-center">
          <span aria-hidden="true" className="mx-auto block h-px w-10 bg-cream/25" />
          <h2
            id="cta-title"
            className="mt-8 font-serif text-[2rem] font-light leading-[1.15] text-cream sm:text-[2.6rem] lg:text-[3rem]"
          >
            Seu próximo momento especial começa aqui.
          </h2>
          <p className="mx-auto mt-6 max-w-[30rem] text-[15px] leading-[1.8] text-cream/70">
            Passe para conhecer nossos sabores ou faça seu pedido pelo WhatsApp.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              href={whatsappLink()}
              variant="light"
              icon={<MessageCircle size={16} strokeWidth={1.75} />}
            >
              Fale conosco pelo WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
