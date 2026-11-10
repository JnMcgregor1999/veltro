import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { ScrollManager } from '@/components/shared/scroll-manager'
import { siteContent } from '@/content/site'
import { HomePage } from '@/pages/home-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { PrivacyPage } from '@/pages/privacy-page'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-brand-navy"
      >
        Skip to content
      </a>

      <SiteHeader
        navigation={siteContent.navigation}
        contact={siteContent.contact}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <SiteFooter
        contact={siteContent.contact}
        tagline={siteContent.footer.tagline}
      />
    </BrowserRouter>
  )
}
