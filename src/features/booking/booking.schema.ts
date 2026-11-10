import { z } from 'zod'

export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s()-]+$/, 'Please enter a valid phone number')
    .refine((value) => {
      const digits = value.replace(/\D/g, '').length
      return digits >= 7 && digits <= 15
    }, 'Please enter a valid phone number'),
  service: z.preprocess(
    (value) => (typeof value === 'string' ? value : ''),
    z.string().min(1, 'Please choose an appliance'),
  ),
  message: z
    .string()
    .trim()
    .max(500, 'Please keep this under 500 characters')
    .optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>
export type BookingField = keyof BookingInput
export type BookingErrors = Partial<Record<BookingField, string>>
