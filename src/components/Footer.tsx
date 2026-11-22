import { Instagram, MapPin, MessageCircle } from 'lucide-react'
import { site } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brown/10 bg-cream">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">
          <div>
            <p className="font-serif text-[15px] uppercase tracking-[0.2em] text-ink">
              Pão <span className="text-terracotta">&amp;</span> Afeto
            </p>
            <p className="mt-5 max-w-[16rem] font-serif text-[1.05rem] font-light italic leading-relaxed text-brown">
              {site.institutionalPhrase}
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Pão & Afeto pelo WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-brown/20 text-brown transition-colors duration-300 hover:border-brown/50 hover:text-ink"
              >
                <MessageCircle size={17} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram da Pão & Afeto (${site.instagram.handle})`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-brown/20 text-brown transition-colors duration-300 hover:border-brown/50 hover:text-ink"
              >
                <Instagram size={17} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.18em] text-brown/60">Onde estamos</h2>
            <address className="mt-5 flex gap-3 not-italic text-[13.5px] leading-[1.8] text-brown/80">
              <MapPin size={16} strokeWidth={1.4} className="mt-1 shrink-0 text-terracotta" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}
              </span>
            </address>
            <ul className="mt-5 space-y-1 text-[13.5px] leading-[1.8] text-brown/70">
              {site.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-[10px] uppercase tracking-[0.18em] text-brown/60">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-brown/80 transition-colors duration-300 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#galeria"
                  className="text-[13.5px] text-brown/80 transition-colors duration-300 hover:text-ink"
                >
                  Galeria
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.18em] text-brown/60">Contato</h2>
            <ul className="mt-5 space-y-3 text-[13.5px] text-brown/80">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-ink"
                >
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-ink"
                >
                  Instagram {site.instagram.handle}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[11px] leading-relaxed text-brown/50">
              Número e endereço fictícios, usados apenas para demonstração.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-brown/10 py-6 text-[11px] tracking-[0.02em] text-brown/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>Feito com tempo, servido com carinho.</p>
        </div>
      </Container>
    </footer>
  )
}
