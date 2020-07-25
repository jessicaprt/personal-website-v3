import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { FOOTER_LINKS as footerLinks} from '../../constants/footer-links.constant';
import { FOOTER_LOGOS as footerLogos} from '../../constants/footer-logos.constant';

import { IFooterLink } from '../../models/footer-link.interface';

import './CustomFooter.css';
import { IFooterLogo } from '../../models/footer-logo.interface';

export class CustomFooter extends React.Component {
  render() {
    const date = new Date();

    return (
      <footer className="footer-wrapper dark-purple-background">
        <Container className="footer-container white-font">
          <Grid className="grid-container" container spacing={2}>
            <Grid className="padded-4x" item xs={4}>
              { footerLinks.map((item: IFooterLink) => {
                return (
                  <div className="padded-1y font--alegreya" key={item.key}>
                    <a href={item.link} className="white-font footer-item-title">{item.title}</a>
                  </div>
                )
              })}

            </Grid>
            <Grid className="padded-4x padded-4y" item xs={8}>
              <div className="footer-logos">
                { footerLogos.map((logoItem: IFooterLogo) => {
                  return (
                    <div className="footer-logo-image" key={logoItem.key}>
                      {logoItem.openNewTab 
                        ? <a href={logoItem.link} target="__blank"><img className="footer-logo-image" src={logoItem.imageUrl} /></a>
                        : <a href={logoItem.link}><img className="footer-logo-image" src={logoItem.imageUrl} /></a>
                      }
                    </div>
                  )
                })}
              </div>
            </Grid>
          </Grid>

          <Grid className="grid-container footer-copyright-info" container spacing={2}>
            <Grid className="padded-4x" item xs={12}>
              <p className="font-roboto">&copy; Jessica Antonious {date.getFullYear()}</p>
            </Grid>
          </Grid>
        </Container>
      </footer>
    )
  }
}