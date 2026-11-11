import type { HomeContent } from '@/types/content'

import { siteContent } from './site'

const imagesPath = `${import.meta.env.BASE_URL}images`

// Wide 16:9 room shot for the full-bleed hero backdrop.
const heroImagePath = `${imagesPath}/appliance-repair.webp`
// 3:4 services card for the framed card inside the hero.
const heroCardImagePath = `${imagesPath}/services.webp`
// 4:3 landscape for the about section.
const aboutImagePath = `${imagesPath}/workshop-repair.webp`

export const homeContent = {
  hero: {
    eyebrow: 'Local service in Dublin',
    title: 'Your home runs better with',
    titleHighlight: 'Veltro.',
    description:
      'We repair your appliances at home or in our workshop. Professional diagnosis, quality parts, and repairs that last.',
    image: heroImagePath,
    imageAlt: 'Modern laundry room with a washing machine and dryer',
    cardImage: heroCardImagePath,
    cardImageAlt:
      'Veltro Appliances services card: repair, installation, service and sales for washing machines, dryers, dishwashers, ovens, cookers and fridges in Dublin',
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
      title: 'Quick appointments',
      description: 'Reliable to suit your schedule',
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
    image: aboutImagePath,
    imageAlt: 'Veltro technician repairing an appliance in the workshop',
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
