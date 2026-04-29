export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/** Mensagem padrão de todos os CTAs de WhatsApp do site. */
export const WA_DEFAULT_MSG = 'Olá, Dra. Mirelle! Gostaria de agendar uma consulta.'

/**
 * Gera a URL oficial do WhatsApp no formato mais estável:
 * https://api.whatsapp.com/send?phone={number}&text={encodedMessage}
 *
 * @param number  Número no formato internacional sem símbolos (ex: 5511979881341)
 * @param message Texto pré-preenchido — aplicado com encodeURIComponent
 */
export function formatWhatsAppUrl(number: string, message?: string): string {
  const base = `https://api.whatsapp.com/send?phone=${number}`
  if (!message) return base
  return `${base}&text=${encodeURIComponent(message)}`
}
