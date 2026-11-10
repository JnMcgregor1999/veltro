import { describe, expect, it } from 'vitest'

import { bookingSchema } from './booking.schema'

describe('bookingSchema', () => {
  it('accepts a valid booking', () => {
    const result = bookingSchema.safeParse({
      name: 'Jane Doe',
      phone: '087 123 4567',
      service: 'Washing machines',
      message: 'It will not spin',
    })

    expect(result.success).toBe(true)
  })

  it('rejects a short name', () => {
    const result = bookingSchema.safeParse({
      name: 'J',
      phone: '087 123 4567',
      service: 'Washing machines',
    })

    expect(result.success).toBe(false)
  })

  it('rejects an empty service', () => {
    const result = bookingSchema.safeParse({
      name: 'Jane Doe',
      phone: '087 123 4567',
      service: '',
    })

    expect(result.success).toBe(false)
  })

  it('rejects a phone number with letters', () => {
    const result = bookingSchema.safeParse({
      name: 'Jane Doe',
      phone: '087 ABC 4567',
      service: 'Washing machines',
    })

    expect(result.success).toBe(false)
  })

  it('rejects a phone number with too few digits', () => {
    const result = bookingSchema.safeParse({
      name: 'Jane Doe',
      phone: '12345',
      service: 'Washing machines',
    })

    expect(result.success).toBe(false)
  })

  it('accepts a phone number with spaces, brackets and a country code', () => {
    const result = bookingSchema.safeParse({
      name: 'Jane Doe',
      phone: '+353 (87) 003 2990',
      service: 'Washing machines',
    })

    expect(result.success).toBe(true)
  })

  it('rejects a missing service with a readable message', () => {
    const result = bookingSchema.safeParse({
      name: 'Jane Doe',
      phone: '087 123 4567',
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe('Please choose an appliance')
    }
  })

  it('rejects a message over 500 characters', () => {
    const result = bookingSchema.safeParse({
      name: 'Jane Doe',
      phone: '087 123 4567',
      service: 'Washing machines',
      message: 'a'.repeat(501),
    })

    expect(result.success).toBe(false)
  })
})
