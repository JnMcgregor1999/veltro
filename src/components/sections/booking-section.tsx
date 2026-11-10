import { Camera, Phone } from 'lucide-react'

import { SectionHeading } from '@/components/shared/section-heading'
import { BookingForm } from '@/features/booking/components/booking-form'
import type { BookingGateway } from '@/features/booking/booking.types'
import type { BookingContent, ContactInfo, Service } from '@/types/content'

interface BookingSectionProps {
  content: BookingContent
  services: readonly Service[]
  contact: ContactInfo
  createBookingLink: BookingGateway
}

export function BookingSection({
  content,
  services,
  contact,
  createBookingLink,
}: BookingSectionProps) {
  return (
    <section
      id="book"
      className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="grid gap-12 rounded-[2rem] bg-[#eaf2ff] p-7 sm:p-12 lg:grid-cols-[0.8fr_1fr] lg:p-16">
        <div>
          <SectionHeading intro={content} />

          <div className="mt-8 flex flex-col gap-4 text-sm font-bold text-brand-navy">
            <a
              href={contact.phoneHref}
              className="flex items-center gap-3 transition-colors hover:text-brand-blue"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-blue">
                <Phone size={17} aria-hidden="true" />
              </span>
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-brand-blue"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-blue">
                <Camera size={17} aria-hidden="true" />
              </span>
              {contact.instagramHandle}
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <BookingForm
            services={services}
            contact={contact}
            content={content}
            createBookingLink={createBookingLink}
          />
        </div>
      </div>
    </section>
  )
}
