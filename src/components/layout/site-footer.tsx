import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BrandLogo } from '@/components/shared/brand-logo'
import { InstagramIcon } from '@/components/shared/instagram-icon'
import type { ContactInfo } from '@/types/content'

interface SiteFooterProps {
  contact: ContactInfo
  tagline: string
}

export function SiteFooter({ contact, tagline }: SiteFooterProps) {
  return (
    <footer
      id="contact"
      className="bg-brand-navy-deep px-5 py-10 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex max-w-page flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <BrandLogo tone="light" className="h-20 w-20" />
          <p className="mt-3 max-w-md text-sm text-slate-400">{tagline}</p>
          <Link
            to="/privacy"
            className="mt-3 inline-block text-xs font-semibold text-slate-400 underline-offset-4 hover:text-brand-yellow hover:underline"
          >
            Privacy notice
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Veltro Appliances on Instagram"
            className="text-slate-300 transition hover:text-brand-yellow"
          >
            <InstagramIcon size={22} />
          </a>
          <a
            href={contact.emailHref}
            aria-label={`Email Veltro Appliances at ${contact.emailDisplay}`}
            title={contact.emailDisplay}
            className="text-slate-300 transition hover:text-brand-yellow"
          >
            <Mail size={22} aria-hidden="true" />
          </a>
          <a
            href={contact.phoneHref}
            className="rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy transition-transform hover:-translate-y-0.5"
          >
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  )
}
