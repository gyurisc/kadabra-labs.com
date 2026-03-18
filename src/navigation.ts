import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'How we work',
      href: getPermalink('/#how-we-work'),
    },
    {
      text: 'EN',
      href: getPermalink('/'),
    },
    {
      text: 'HU',
      href: getPermalink('/hu'),
    },
  ],
  actions: [{ text: 'Book a Call', href: 'https://cal.com/kadabralabs/15min', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Contact',
      links: [{ text: 'hello@kadabra-labs.com', href: 'mailto:hello@kadabra-labs.com' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: '© 2026 Kadabra Labs Kft. · Budapest, Hungary',
};
