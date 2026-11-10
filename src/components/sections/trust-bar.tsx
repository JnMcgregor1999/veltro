import { Clock3, ShieldCheck, Wrench } from 'lucide-react'

import { cn } from '@/lib/cn'
import type { TrustItem } from '@/types/content'

const icons = {
  shield: ShieldCheck,
  clock: Clock3,
  wrench: Wrench,
} as const

interface TrustBarProps {
  items: readonly TrustItem[]
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="relative z-10 mx-auto -mt-9 max-w-page px-5 sm:px-8 lg:px-10">
      <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl shadow-brand-navy/10 sm:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[item.icon]

          return (
            <div
              key={item.title}
              className={cn(
                'flex gap-4 p-6',
                index < items.length - 1 &&
                  'border-b border-brand-border sm:border-b-0 sm:border-r',
              )}
            >
              <Icon
                className="shrink-0 text-brand-blue"
                size={28}
                aria-hidden="true"
              />
              <div>
                <p className="font-extrabold">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
