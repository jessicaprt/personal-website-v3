import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './PageInfo.css';

export class PageInfo extends React.Component {
  render() {
    return (
      <div className="section--wrapper">
        <div className="page-info-section--1">
          <Container>
            <div className="page-info-nav-container">
              <div className="page-info-about-nav font--sacramento">
                <a href="/" className="gray-font--1">home</a>
              </div>
              <div className="page-info-nav-line"></div>
            </div>
          </Container>
        </div>

        <div className="page-info-section--2 purple-background">
          <Container>
            <div className="page-info-title font--sacramento white-font padded-4y">
              Page Info
            </div>
          </Container>
        </div>

        <div className="page-info-section--3">
          <Container>
            <div className="page-info-body padded-4y">
              <img src="assets/page-info--image-1.png"/>
            </div>
          </Container>
        </div>

        <div className="page-info-section--4 padded-4y">
          <Container>
            <div className="page-info--1 gray-font--1">
              <p>All the fonts used are from <a href="https://fonts.google.com/">Google Fonts</a>. All the images on 
              the main page are from <a href="https://www.canva.com/">Canva</a>.</p>
            </div>
          </Container>
        </div>
      </div>

    )
  }
}