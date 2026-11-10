import { SectionHeading } from '@/components/shared/section-heading'
import type { AboutContent } from '@/types/content'

interface AboutSectionProps {
  content: AboutContent
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-brand-navy px-5 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid max-w-page gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="relative">
          <div
            className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-brand-yellow/50"
            aria-hidden="true"
          />
          <img
            src={content.image}
            alt={content.imageAlt}
            width={1200}
            height={1511}
            loading="lazy"
            decoding="async"
            className="relative h-[430px] w-full rounded-[2rem] object-cover object-[60%] shadow-2xl"
          />
        </div>

        <div>
          <SectionHeading intro={content} tone="dark" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-xl border border-white/15 bg-white/5 p-4"
              >
                <p className="text-2xl font-black text-brand-yellow">
                  {highlight.title}
                </p>
                <p className="mt-1 text-sm text-brand-mist">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
