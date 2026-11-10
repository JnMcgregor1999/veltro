import { describe, expect, it } from 'vitest'

import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  createWhatsAppGateway,
} from './booking.whatsapp'

const input = {
  name: 'Jane Doe',
  phone: '087 123 4567',
  service: 'Washing machines',
  message: 'It will not spin',
}

describe('buildWhatsAppMessage', () => {
  it('includes the booking details', () => {
    const message = buildWhatsAppMessage(input)

    expect(message).toContain('Jane Doe')
    expect(message).toContain('087 123 4567')
    expect(message).toContain('Washing machines')
    expect(message).toContain('It will not spin')
  })

  it('omits the issue line when there is no message', () => {
    const message = buildWhatsAppMessage({ ...input, message: undefined })

    expect(message).not.toContain('Issue:')
  })
})

describe('buildWhatsAppUrl', () => {
  it('builds a wa.me link with an encoded message', () => {
    const url = buildWhatsAppUrl(input, '+353870032990')
    const encodedMessage = url.split('?text=')[1] ?? ''

    expect(url).toMatch(/^https:\/\/wa\.me\/353870032990\?text=/)
    expect(decodeURIComponent(encodedMessage)).toContain('Jane Doe')
  })
})

describe('createWhatsAppGateway', () => {
  it('returns a gateway bound to the phone number', () => {
    const gateway = createWhatsAppGateway('+353870032990')

    expect(gateway(input)).toContain('wa.me/353870032990')
  })
})
