import type { HomeContent } from '@/types/content'

import { siteContent } from './site'

export const homeContent = {
  hero: {
    eyebrow: 'Local service in Dublin',
    title: 'Your home runs better with',
    titleHighlight: 'Veltro.',
    description:
      'We repair your appliances at home or in our workshop. Professional diagnosis, quality parts, and repairs that last.',
    image: '/images/appliance-repair.webp',
    imageAlt: 'Veltro technician repairing a home appliance',
    primaryCta: { label: 'Book a repair', href: '/#book' },
    secondaryCta: { label: 'Call now', href: siteContent.contact.phoneHref },
    badges: ['At-home service', 'Workshop repairs', 'Quality parts'],
  },
  trust: [
    {
      icon: 'shield',
      title: 'Guaranteed work',
      description: 'Quality on every visit',
    },
    {
      icon: 'clock',
      title: 'Fast response',
      description: 'We book when you need us',
    },
    {
      icon: 'wrench',
      title: 'Expert technician',
      description: 'Clear, honest solutions',
    },
  ],
  services: {
    eyebrow: 'What we repair',
    title: 'Solutions for every appliance in your home.',
    description:
      "From a washing machine that won't spin to an oven that won't heat. Tell us what's wrong and we'll help.",
  },
  about: {
    eyebrow: 'Close to you in Dublin',
    title: 'A trusted technician, when you need one.',
    description:
      'At Veltro Appliances we believe repairs should be easy. We explain the problem, find the best solution, and work with quality parts.',
    image: '/images/appliance-repair.webp',
    imageAlt: 'Veltro appliance repair service',
    highlights: [
      {
        title: 'At home',
        description: 'We come to your door.',
      },
      {
        title: 'In our workshop',
        description: 'You can also bring your appliance to us.',
      },
    ],
  },
  booking: {
    eyebrow: 'Book your visit',
    title: 'Tell us what needs fixing.',
    description:
      "Leave your details and we'll contact you to confirm availability and the type of service you need.",
    formNote: "You'll be redirected to WhatsApp to send your request.",
    fallbackTitle: 'WhatsApp did not open?',
    fallbackDescription: 'Open the message manually or call us directly.',
  },
} satisfies HomeContent
