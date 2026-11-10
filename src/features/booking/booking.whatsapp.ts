import type { BookingInput } from './booking.schema'
import type { BookingGateway } from './booking.types'

export function buildWhatsAppMessage(input: BookingInput): string {
  return [
    'Hello Veltro Appliances, I would like to book a repair.',
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Appliance: ${input.service}`,
    input.message ? `Issue: ${input.message}` : null,
  ]
    .filter(Boolean)
    .join('\n')
}

export function buildWhatsAppUrl(
  input: BookingInput,
  phoneE164: string,
): string {
  const text = encodeURIComponent(buildWhatsAppMessage(input))
  const phone = phoneE164.replace(/\D/g, '')

  return `https://wa.me/${phone}?text=${text}`
}

export function createWhatsAppGateway(phoneE164: string): BookingGateway {
  return (input) => buildWhatsAppUrl(input, phoneE164)
}
