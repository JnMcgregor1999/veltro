import type { SiteContent } from '@/types/content'

export const siteContent = {
  name: 'Veltro Appliances',
  shortName: 'Veltro',
  contact: {
    phoneDisplay: '087 003 2990',
    phoneHref: 'tel:+353870032990',
    whatsappE164: '+353870032990',
    instagramUrl: 'https://instagram.com/veltro_appliances',
    instagramHandle: '@veltro_appliances',
  },
  navigation: [
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
  footer: {
    tagline: 'Appliance repair in Dublin · At-home and workshop service',
  },
} satisfies SiteContent
