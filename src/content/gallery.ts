import type { GalleryContent } from '@/types/content'

import { siteContent } from './site'

const videosPath = `${import.meta.env.BASE_URL}videos`
const postersPath = `${import.meta.env.BASE_URL}images/gallery`

/** Clips are exported from the shop's public Instagram account. */
export const galleryContent = {
  eyebrow: 'From our Instagram',
  title: 'Recent repairs, caught on camera.',
  description:
    'Short clips from jobs across Dublin: installations, diagnostics and fixes, at home and in our workshop.',
  ctaLabel: 'More videos on Instagram',
  ctaHref: siteContent.contact.instagramUrl,
  items: [
    {
      id: 'bosch-dishwasher-installation',
      title: 'Bosch dishwasher installation',
      description: 'Fitted, levelled and inspected before handover.',
      video: `${videosPath}/bosch-dishwasher-installation.mp4`,
      poster: `${postersPath}/bosch-dishwasher-installation.webp`,
      instagramUrl: 'https://www.instagram.com/reel/DfAvDrOuLtY/',
    },
    {
      id: 'hotpoint-dishwasher-drain',
      title: 'Hotpoint dishwasher drain repair',
      description: 'Drain fault traced, wiring fixed and maintenance done.',
      video: `${videosPath}/hotpoint-dishwasher-drain.mp4`,
      poster: `${postersPath}/hotpoint-dishwasher-drain.webp`,
      instagramUrl: 'https://www.instagram.com/reel/DezhQAEu2X4/',
    },
    {
      id: 'vacuum-cleaner-maintenance',
      title: 'Vacuum cleaner service',
      description: 'Serviced and revived instead of thrown away.',
      video: `${videosPath}/vacuum-cleaner-maintenance.mp4`,
      poster: `${postersPath}/vacuum-cleaner-maintenance.webp`,
      instagramUrl: 'https://www.instagram.com/reel/DdMqkQiAGYV/',
    },
    {
      id: 'washing-machine-shock-absorber',
      title: 'Washing machine spin fix',
      description: 'Worn shock absorbers replaced to stop the drum bouncing.',
      video: `${videosPath}/washing-machine-shock-absorber.mp4`,
      poster: `${postersPath}/washing-machine-shock-absorber.webp`,
      instagramUrl: 'https://www.instagram.com/reel/DdMpMPLgHHw/',
    },
    {
      id: 'bosch-washing-machine-test',
      title: 'Bosch Series 4 spin test',
      description: 'Spin cycle tested and the machine delivered under warranty.',
      video: `${videosPath}/bosch-washing-machine-test.mp4`,
      poster: `${postersPath}/bosch-washing-machine-test.webp`,
      instagramUrl: 'https://www.instagram.com/reel/Dc4Z-3ugp1o/',
    },
    {
      id: 'miele-detergent-dispenser',
      title: 'Miele dispenser sensor',
      description: 'Detergent dispenser sensor replaced and tested.',
      video: `${videosPath}/miele-detergent-dispenser.mp4`,
      poster: `${postersPath}/miele-detergent-dispenser.webp`,
      instagramUrl: 'https://www.instagram.com/reel/Dc1tSyQgXW1/',
    },
  ],
} satisfies GalleryContent
