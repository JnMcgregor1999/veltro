import type { Service } from '@/types/content'

export const services = [
  {
    id: 'washing-machines',
    name: 'Washing machines',
    description: 'Drum, spin, drainage and control faults.',
    icon: 'washing-machine',
  },
  {
    id: 'tumble-dryers',
    name: 'Tumble dryers',
    description: 'Heating, tumbling and sensor problems.',
    icon: 'dryer',
  },
  {
    id: 'electric-ovens',
    name: 'Electric ovens',
    description: 'Heating elements, fans and thermostats.',
    icon: 'oven',
  },
  {
    id: 'dishwashers',
    name: 'Dishwashers',
    description: 'Drainage, spray arms and cycle faults.',
    icon: 'dishwasher',
  },
  {
    id: 'fridges-freezers',
    name: 'Fridges & freezers',
    description: 'Cooling, defrost and temperature issues.',
    icon: 'fridge',
  },
  {
    id: 'cookers-hobs',
    name: 'Cookers & hobs',
    description: 'Rings, ignition and control faults.',
    icon: 'cooker',
  },
] satisfies readonly Service[]
