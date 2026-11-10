import { cn } from '@/lib/cn'
import type { SectionIntro } from '@/types/content'

interface SectionHeadingProps {
  intro: SectionIntro
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  intro,
  tone = 'light',
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p
        className={cn(
          'mb-3 text-xs font-black uppercase tracking-[0.2em]',
          isDark ? 'text-brand-yellow' : 'text-brand-blue',
        )}
      >
        {intro.eyebrow}
      </p>
      <h2
        className={cn(
          'text-4xl font-black tracking-[-0.035em] sm:text-5xl',
          isDark ? 'text-white' : 'text-brand-navy',
        )}
      >
        {intro.title}
      </h2>
      {intro.description ? (
        <p
          className={cn(
            'mt-5 text-lg leading-8',
            isDark ? 'text-brand-mist' : 'text-slate-500',
          )}
        >
          {intro.description}
        </p>
      ) : null}
    </div>
  )
}
