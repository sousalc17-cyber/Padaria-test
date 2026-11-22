import { gallery } from '../data/site'
import Container from './Container'
import Reveal from './Reveal'
import SmartImage from './SmartImage'

const layout = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1 md:col-span-4',
]

export default function Gallery() {
  return (
    <section id="galeria" aria-labelledby="gallery-title" className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal className="max-w-[32rem]">
          <p className="text-[10px] uppercase tracking-[0.18em] text-terracotta">Galeria</p>
          <h2
            id="gallery-title"
            className="mt-5 font-serif text-[2rem] font-light leading-[1.15] text-ink sm:text-[2.5rem]"
          >
            Um pouco do nosso dia.
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] md:grid-cols-4 lg:auto-rows-[200px] lg:gap-4">
          {gallery.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 60}
              className={`${layout[index] ?? ''} h-full`}
            >
              <SmartImage
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-[2px]"
                imgClassName="transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
