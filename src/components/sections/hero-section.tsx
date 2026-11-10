import { ArrowRight, Check, Phone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button-variants'
import type { HeroContent } from '@/types/content'

interface HeroSectionProps {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-brand-navy pt-28 text-white lg:min-h-[780px]"
    >
      <img
        src={content.image}
        alt=""
        aria-hidden="true"
        width={1200}
        height={1511}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/95 via-45% to-brand-navy/20" />
      <div
        className="absolute -right-20 top-28 h-80 w-80 rounded-full bg-brand-sky/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-page gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:px-10 lg:pb-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            <Sparkles size={14} aria-hidden="true" />
            {content.eyebrow}
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-7xl">
            {content.title}{' '}
            <span className="text-brand-yellow">{content.titleHighlight}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-brand-mist">
            {content.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to={content.primaryCta.href}
              className={buttonVariants({ size: 'lg' })}
            >
              {content.primaryCta.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={content.secondaryCta.href}
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              <Phone size={17} aria-hidden="true" />
              {content.secondaryCta.label}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#c5d5ec]">
            {content.badges.map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <Check className="text-brand-yellow" size={17} aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="ml-auto max-w-[350px] rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
            <img
              src={content.image}
              alt={content.imageAlt}
              width={1200}
              height={1511}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[52%]"
            />
            <div className="flex items-center justify-between px-3 py-4">
              <span className="text-sm font-bold">Repair · Sales · Service</span>
              <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-black text-brand-navy">
                DUBLIN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
