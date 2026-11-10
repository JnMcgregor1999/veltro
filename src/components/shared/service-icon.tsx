import {
  CookingPot,
  Droplets,
  Flame,
  Snowflake,
  WashingMachine,
  Wind,
  type LucideIcon,
} from 'lucide-react'

import type { ServiceIconName } from '@/types/content'

const icons: Record<ServiceIconName, LucideIcon> = {
  'washing-machine': WashingMachine,
  dryer: Wind,
  oven: Flame,
  dishwasher: Droplets,
  fridge: Snowflake,
  cooker: CookingPot,
}

interface ServiceIconProps {
  name: ServiceIconName
  className?: string
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = icons[name]

  return <Icon className={className} aria-hidden="true" />
}
