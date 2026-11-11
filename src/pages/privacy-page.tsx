import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { privacyContent } from '@/content/privacy'
import { siteContent } from '@/content/site'
import { useDocumentTitle } from '@/hooks/use-document-title'

export function PrivacyPage() {
  useDocumentTitle('Privacy notice | Veltro Appliances')

  return (
    <main
      id="main"
      className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-navy"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to home
      </Link>

      <h1 className="mt-8 text-4xl font-black tracking-[-0.035em] text-brand-navy sm:text-5xl">
        {privacyContent.title}
      </h1>
      <p className="mt-3 text-sm font-semibold text-slate-500">
        {privacyContent.lastUpdated}
      </p>
      <p className="mt-6 text-lg leading-8 text-slate-600">
        {privacyContent.intro}
      </p>

      <div className="mt-10 grid gap-8">
        {privacyContent.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-extrabold text-brand-navy">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm">
        <p className="font-bold text-brand-navy">Contact</p>
        <p className="mt-2 leading-7 text-slate-600">
          For any privacy question, call{' '}
          <a
            href={siteContent.contact.phoneHref}
            className="font-semibold text-brand-blue underline-offset-4 hover:underline"
          >
            {siteContent.contact.phoneDisplay}
          </a>{' '}
          or message us on Instagram at{' '}
          <a
            href={siteContent.contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand-blue underline-offset-4 hover:underline"
          >
            {siteContent.contact.instagramHandle}
          </a>{' '}
          or email us at{' '}
          <a
            href={siteContent.contact.emailHref}
            className="font-semibold text-brand-blue underline-offset-4 hover:underline"
          >
            {siteContent.contact.emailDisplay}
          </a>
          .
        </p>
      </div>
    </main>
  )
}
