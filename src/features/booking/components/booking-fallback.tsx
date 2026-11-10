import { Phone } from 'lucide-react'

import type { BookingContent, ContactInfo } from '@/types/content'

interface BookingFallbackProps {
  url: string
  contact: ContactInfo
  content: BookingContent
}

export function BookingFallback({
  url,
  contact,
  content,
}: BookingFallbackProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-4 text-sm"
    >
      <p className="font-bold text-brand-navy">{content.fallbackTitle}</p>
      <p className="mt-1 text-slate-600">{content.fallbackDescription}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-brand-blue underline-offset-4 hover:underline"
        >
          Open WhatsApp message
        </a>
        <a
          href={contact.phoneHref}
          className="inline-flex items-center gap-2 font-bold text-brand-navy"
        >
          <Phone size={15} aria-hidden="true" />
          {contact.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
