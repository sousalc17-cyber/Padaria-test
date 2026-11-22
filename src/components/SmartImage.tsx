import { useState } from 'react'

type SmartImageProps = {
  src: string
  alt: string
  /** Classes do contêiner (normalmente a proporção da imagem). */
  className?: string
  /** Classes extras do elemento <img>. */
  imgClassName?: string
  /** Carrega a imagem imediatamente (usar apenas na primeira dobra). */
  priority?: boolean
}

/**
 * Imagem com carregamento preguiçoso e substituto visual caso o arquivo falhe.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-beige ${className}`}
      >
        <span className="px-4 text-center font-serif text-[11px] uppercase tracking-[0.22em] text-brown/60">
          Pão &amp; Afeto
        </span>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden bg-beige ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
