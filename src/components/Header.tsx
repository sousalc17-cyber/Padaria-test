import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import Button from './Button'
import Container from './Container'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 bg-cream/95 backdrop-blur-sm transition-all duration-300',
        scrolled || menuOpen ? 'border-b border-brown/10' : 'border-b border-transparent',
      ].join(' ')}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="font-serif text-[15px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-brown sm:text-base"
          >
            Pão <span className="text-terracotta">&amp;</span> Afeto
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.16em] text-brown transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={whatsappLink()} size="sm" variant="outline">
              Faça seu pedido
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[2px] text-ink transition-colors duration-300 hover:bg-brown/5 lg:hidden"
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-brown/10 bg-cream lg:hidden">
          <Container className="pb-8 pt-4">
            <nav aria-label="Navegação mobile" className="flex flex-col">
              {site.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-brown/10 py-4 text-[12px] uppercase tracking-[0.16em] text-brown transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button href={whatsappLink()} className="mt-6 w-full" onClick={closeMenu}>
              Faça seu pedido
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
