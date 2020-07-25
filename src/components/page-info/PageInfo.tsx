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
      </div>
    )
  }
}