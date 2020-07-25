import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { ABOUT_ME as aboutMe } from '../../constants/about-me.constant';

import './AboutMe.css';

export class AboutMe extends React.Component {
  render() {
    return (
      <div className="section--wrapper">
        <div className="about-section-1">
          <Container>
            <Grid className="grid-container" container spacing={2}>
              <Grid className="padded-2x" item xs={4}>
                <div className="about-nav-container">
                  <div className="about-nav font--sacramento">
                    <a href="/" className="gray-font--1">home</a>
                  </div>
                  <div className="about-nav-line"></div>
                </div>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Container>
        </div>

        <div className="about-section-2 purple-background">
          <Container>
            <Grid className="grid-container" container spacing={2}>
              <Grid className="padded-2x" item xs={4}></Grid>
              <Grid className="padded-2x" item xs={4}>
                <div className="about-image-wrapper">
                  <div className="about-image-container">
                    <img className="about-image" src="assets/about--image.jpg"/>
                    <div className="about-image-title white-font font--sacramento">About Me.</div>
                  </div>
                </div>
              </Grid>
              <Grid className="padded-2x" item xs={4}></Grid>
            </Grid>
          </Container>
        </div>

        <div className="about-section-3 padded-4y">
          <Container>
            <p className="about-description gray-font--1">{aboutMe.description}</p>
          </Container>
        </div>
      </div>
    );
  }
}