import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [{ text: 'Book a Call', href: 'https://cal.com/kadabralabs/15min', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    © 2026 Kadabra Labs Kft. · All rights reserved.
  `,
};
