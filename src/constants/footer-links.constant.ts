import { IFooterLink } from '../models/footer-link.interface';

export const FOOTER_LINKS: IFooterLink[] = [
  {
    key: 'footer-1',
    title: 'About Me',
    link: '/about-me'
  }, {
    key: 'footer-2',
    title: 'Page Info',
    link: '/page-info'
  }, {
    key: 'footer-3',
    title: 'Contact',
    subtitle: 'jessica@prieto.ca',
    link: '/'
  }
];