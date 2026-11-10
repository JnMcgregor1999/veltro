export type ServiceIconName =
  | 'washing-machine'
  | 'dryer'
  | 'oven'
  | 'dishwasher'
  | 'fridge'
  | 'cooker'

export interface Service {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly icon: ServiceIconName
}

export interface NavItem {
  readonly label: string
  readonly href: string
}

export interface ContactInfo {
  readonly phoneDisplay: string
  readonly phoneHref: string
  readonly whatsappE164: string
  readonly instagramUrl: string
  readonly instagramHandle: string
}

export interface LinkCta {
  readonly label: string
  readonly href: string
}

export interface HeroContent {
  readonly eyebrow: string
  readonly title: string
  readonly titleHighlight: string
  readonly description: string
  readonly image: string
  readonly imageAlt: string
  readonly primaryCta: LinkCta
  readonly secondaryCta: LinkCta
  readonly badges: readonly string[]
}

export type TrustIconName = 'shield' | 'clock' | 'wrench'

export interface TrustItem {
  readonly icon: TrustIconName
  readonly title: string
  readonly description: string
}

export interface SectionIntro {
  readonly eyebrow: string
  readonly title: string
  readonly description?: string
}

export interface Highlight {
  readonly title: string
  readonly description: string
}

export interface AboutContent extends SectionIntro {
  readonly image: string
  readonly imageAlt: string
  readonly highlights: readonly Highlight[]
}

export interface BookingContent extends SectionIntro {
  readonly formNote: string
  readonly fallbackTitle: string
  readonly fallbackDescription: string
}

export interface FooterContent {
  readonly tagline: string
}

export interface SiteContent {
  readonly name: string
  readonly shortName: string
  readonly contact: ContactInfo
  readonly navigation: readonly NavItem[]
  readonly footer: FooterContent
}

export interface HomeContent {
  readonly hero: HeroContent
  readonly trust: readonly TrustItem[]
  readonly services: SectionIntro
  readonly about: AboutContent
  readonly booking: BookingContent
}

export interface PrivacySection {
  readonly title: string
  readonly paragraphs: readonly string[]
}

export interface PrivacyContent {
  readonly title: string
  readonly lastUpdated: string
  readonly intro: string
  readonly sections: readonly PrivacySection[]
}
