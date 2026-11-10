import { Wrench } from 'lucide-react'

import { cn } from '@/lib/cn'

interface BrandLogoProps {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow text-brand-navy shadow-lg shadow-black/15">
        <Wrench size={23} strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block text-[19px] font-black tracking-[0.18em]">
          VELTRO
        </span>
        <span className="block pt-1 text-[9px] font-bold tracking-[0.24em] text-brand-ice">
          APPLIANCES
        </span>
      </span>
    </span>
  )
}
