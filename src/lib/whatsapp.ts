import { site } from '../data/site'

/**
 * Monta o link de conversa no WhatsApp.
 * O número é configurado em `src/data/site.ts` (dado fictício de demonstração).
 */
export function whatsappLink(message: string = site.whatsapp.message): string {
  const digits = site.whatsapp.number.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
