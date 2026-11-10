import { ArrowRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Field, Input, Select, Textarea } from '@/components/ui/field'
import type { BookingContent, ContactInfo, Service } from '@/types/content'

import { bookingSchema, type BookingErrors } from '../booking.schema'
import type { BookingGateway } from '../booking.types'
import { BookingFallback } from './booking-fallback'

interface BookingFormProps {
  services: readonly Service[]
  contact: ContactInfo
  content: BookingContent
  createBookingLink: BookingGateway
}

export function BookingForm({
  services,
  contact,
  content,
  createBookingLink,
}: BookingFormProps) {
  const [errors, setErrors] = useState<BookingErrors>({})
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const parsed = bookingSchema.safeParse(
      Object.fromEntries(new FormData(event.currentTarget)),
    )

    if (!parsed.success) {
      const nextErrors: BookingErrors = {}

      for (const issue of parsed.error.issues) {
        const field = issue.path[0]
        if (typeof field === 'string') {
          nextErrors[field as keyof BookingErrors] = issue.message
        }
      }

      setErrors(nextErrors)
      setWhatsappUrl(null)

      const firstField = Object.keys(nextErrors)[0]
      if (firstField) {
        document.getElementById(firstField)?.focus()
      }

      return
    }

    setErrors({})
    const url = createBookingLink(parsed.data)
    setWhatsappUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      <Field label="Name" htmlFor="name" error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
      </Field>

      <Field label="Phone" htmlFor="phone" error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="087 003 2990"
          required
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
      </Field>

      <Field
        label="Appliance"
        htmlFor="service"
        error={errors.service}
      >
        <Select
          id="service"
          name="service"
          defaultValue=""
          required
          aria-invalid={errors.service ? true : undefined}
          aria-describedby={errors.service ? 'service-error' : undefined}
        >
          <option value="" disabled>
            Select an appliance
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        label="What is the problem?"
        htmlFor="message"
        error={errors.message}
      >
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="E.g. The washing machine will not start..."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
      </Field>

      <Button
        type="submit"
        variant="solid"
        size="form"
        className="mt-2 w-full"
      >
        Request a visit
        <ArrowRight size={18} aria-hidden="true" />
      </Button>

      <p className="text-center text-xs leading-5 text-slate-500">
        {content.formNote}{' '}
        <Link
          to="/privacy"
          className="font-semibold text-brand-blue underline-offset-4 hover:underline"
        >
          Privacy notice
        </Link>
        .
      </p>

      {whatsappUrl ? (
        <BookingFallback
          url={whatsappUrl}
          contact={contact}
          content={content}
        />
      ) : null}
    </form>
  )
}
