import CallToAction from './components/CallToAction'
import Craft from './components/Craft'
import Essence from './components/Essence'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-5 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-[0.14em] focus:text-cream"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Essence />
        <Products />
        <Craft />
        <Gallery />
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}
