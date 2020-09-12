import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './PageInfo.css';
import { CustomFooter } from '../footer/CustomFooter';

export class PageInfo extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
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
                <div className="page-info-subsection padded-1y">
                  <h2 className="font--sacramento">This site</h2>
                  <p>This site was built using React. Click here to view the source code.</p>
                </div>
                
                <div className="page-info-subsection padded-1y">
                  <h2 className="font--sacramento">Fonts</h2>
                  <p>All the fonts used are from <a href="https://fonts.google.com/">Google Fonts</a>.</p>
                </div>
                
                <div className="page-info-subsection padded-1y">
                  <h2 className="font--sacramento">Images</h2>
                  <p>All the images on the main page are from <a href="https://www.canva.com/">Canva</a>. All the images in the about me page my own images.</p>
                </div>

                <div className="page-info-subsection padded-1y">
                  <h2 className="font--sacramento">Site mockups</h2>
                  <p>Here are some of the sample mock-ups i was using as a reference when building the page:</p>

                  <div className="padded-2y">
                    <Grid container spacing={2} className="padded-1y">
                      <Grid item xs={4} className="page-info--mockup-image">
                        <img src="assets/web-mockup--1.png"></img>
                      </Grid>
                      <Grid item xs={4} className="page-info--mockup-image">
                        <img src="assets/web-mockup--2.png"></img>
                      </Grid>
                      <Grid item xs={4} className="page-info--mockup-image">
                        <img src="assets/web-mockup--3.png"></img>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} className="padded-2y">
                      <Grid item xs={4} className="page-info--mockup-image">
                        <img src="assets/web-mockup--4.png"></img>
                      </Grid>
                      <Grid item xs={4} className="page-info--mockup-image">
                        <img src="assets/web-mockup--5.png"></img>
                      </Grid>
                      <Grid item xs={4} className="page-info--mockup-image">
                        <img src="assets/web-mockup--6.png"></img>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <CustomFooter/>
      </div>
    );
  }
}