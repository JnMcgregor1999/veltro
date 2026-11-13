import { AboutSection } from '@/components/sections/about-section'
import { BookingSection } from '@/components/sections/booking-section'
import { GallerySection } from '@/components/sections/gallery-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { TrustBar } from '@/components/sections/trust-bar'
import { galleryContent } from '@/content/gallery'
import { homeContent } from '@/content/home'
import { services } from '@/content/services'
import { siteContent } from '@/content/site'
import { createWhatsAppGateway } from '@/features/booking/booking.whatsapp'
import { useDocumentTitle } from '@/hooks/use-document-title'

export function HomePage() {
  useDocumentTitle('Veltro Appliances | Appliance Repair in Dublin')

  const createBookingLink = createWhatsAppGateway(
    siteContent.contact.whatsappE164,
  )

  return (
    <main id="main">
      <HeroSection content={homeContent.hero} />
      <TrustBar items={homeContent.trust} />
      <ServicesSection
        intro={homeContent.services}
        services={services}
        bookHref="/#book"
      />
      <AboutSection content={homeContent.about} />
      <GallerySection content={galleryContent} />
      <BookingSection
        content={homeContent.booking}
        services={services}
        contact={siteContent.contact}
        createBookingLink={createBookingLink}
      />
    </main>
  )
}
