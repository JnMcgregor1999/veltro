import type { BookingInput } from './booking.schema'

export type BookingGateway = (input: BookingInput) => string
