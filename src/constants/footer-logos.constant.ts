import { IFooterLogo } from '../models/footer-logo.interface';

export const FOOTER_LOGOS: IFooterLogo[] = [
  {
    key: 'footer-logo-1',
    imageUrl: 'assets/logos/footer/mail.png',
    link: 'mailto:jessica@prieto.ca',
    openNewTab: false
  }, {
    key: 'footer-logo-2',
    imageUrl: 'assets/logos/footer/github.png',
    link: 'https://github.com/jessicaprt',
    openNewTab: true
  }, {
    key: 'footer-logo-3',
    imageUrl: 'assets/logos/footer/linkedin.png',
    link: 'https://www.linkedin.com/in/jessica-antonious-316918a6/',
    openNewTab: true
  }
];