import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button-variants'
import type { ContactInfo, NavItem } from '@/types/content'

interface MobileMenuProps {
  navigation: readonly NavItem[]
  contact: ContactInfo
}

export function MobileMenu({ navigation, contact }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="rounded-lg p-2 transition-colors hover:bg-white/10"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? (
          <X aria-hidden="true" />
        ) : (
          <Menu aria-hidden="true" />
        )}
      </button>

      {open ? (
        <nav
          ref={panelRef}
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-brand-navy px-5 py-5 shadow-2xl"
        >
          <div className="flex flex-col gap-5 text-sm font-bold">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-brand-yellow"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.phoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-brand-yellow"
            >
              <Phone size={16} aria-hidden="true" />
              {contact.phoneDisplay}
            </a>
            <Link
              to="/#book"
              onClick={() => setOpen(false)}
              className={buttonVariants({ size: 'md', className: 'text-center' })}
            >
              Book a visit
            </Link>
          </div>
        </nav>
      ) : null}
    </div>
  )
}
