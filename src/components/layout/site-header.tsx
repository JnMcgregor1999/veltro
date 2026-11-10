import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BrandLogo } from '@/components/shared/brand-logo'
import { buttonVariants } from '@/components/ui/button-variants'
import type { ContactInfo, NavItem } from '@/types/content'

import { MobileMenu } from './mobile-menu'

interface SiteHeaderProps {
  navigation: readonly NavItem[]
  contact: ContactInfo
}

export function SiteHeader({ navigation, contact }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-page items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/#home" aria-label="Veltro Appliances home">
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-semibold lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="transition-colors hover:text-brand-yellow"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-sm font-bold transition-colors hover:text-brand-yellow"
          >
            <Phone size={16} aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <Link to="/#book" className={buttonVariants({ size: 'md' })}>
            Book a visit
          </Link>
        </div>

        <MobileMenu navigation={navigation} contact={contact} />
      </div>
    </header>
  )
}
