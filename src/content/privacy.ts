import type { PrivacyContent } from '@/types/content'

export const privacyContent = {
  title: 'Privacy notice',
  lastUpdated: 'Last updated: November 2026',
  intro:
    'This notice explains how Veltro Appliances handles the information you share when you contact us or request a repair in Dublin.',
  sections: [
    {
      title: 'Who we are',
      paragraphs: [
        'Veltro Appliances provides appliance repair services in Dublin, Ireland. For the purposes of data protection law, Veltro Appliances is the data controller for the information described in this notice.',
      ],
    },
    {
      title: 'What we collect',
      paragraphs: [
        'When you use the booking form, we collect the name, phone number, appliance type and any details you choose to include about the problem.',
        'We only ask for the information we need to respond to your request and arrange a repair.',
      ],
    },
    {
      title: 'How we use it',
      paragraphs: [
        'We use your information to contact you, confirm availability, provide a diagnosis and carry out the repair you requested.',
        'Our legal basis is the performance of a contract or steps taken at your request before entering into a contract. Where we rely on legitimate interests, we only use your information in ways you would reasonably expect.',
      ],
    },
    {
      title: 'WhatsApp',
      paragraphs: [
        'The booking form prepares a message and opens WhatsApp so you can send it to us. Nothing is sent automatically. When you send the message, WhatsApp processes your information under its own privacy policy.',
        'If you prefer not to use WhatsApp, you can call us directly using the phone number shown on this website.',
      ],
    },
    {
      title: 'How long we keep it',
      paragraphs: [
        'We keep booking and repair records only for as long as needed to provide the service, meet our legal obligations and handle any warranty or follow-up request.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        'You have the right to access, correct, erase or restrict the use of your personal data, and to object to certain processing. To exercise these rights, contact us using the details on this website.',
        'You also have the right to complain to the Data Protection Commission of Ireland if you believe your information has not been handled correctly.',
      ],
    },
    {
      title: 'Cookies',
      paragraphs: [
        'This website does not use advertising or tracking cookies. Any essential storage is limited to what is needed for the site to work.',
      ],
    },
  ],
} satisfies PrivacyContent
