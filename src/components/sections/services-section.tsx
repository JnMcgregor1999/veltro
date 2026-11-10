import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeading } from '@/components/shared/section-heading'
import { ServiceIcon } from '@/components/shared/service-icon'
import type { SectionIntro, Service } from '@/types/content'

interface ServicesSectionProps {
  intro: SectionIntro
  services: readonly Service[]
  bookHref: string
}

export function ServicesSection({
  intro,
  services,
  bookHref,
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:px-10"
    >
      <SectionHeading intro={intro} className="mb-12" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            to={bookHref}
            className="group rounded-2xl border border-brand-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/10"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf2ff] text-brand-blue">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <ArrowRight
                className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-blue"
                size={20}
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-extrabold text-brand-navy">
              {service.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
