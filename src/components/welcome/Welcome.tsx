import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { WELCOME } from '../../constants/welcome.constant';
import { Navigation } from './navigation/Navigation';

import './Welcome.css';

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section--wrapper welcome-wrapper">
        <div className="purple-box--1 purple-background">
          <div className="welcome-box-text white-font font--alegreya">Jessica Antonious &nbsp;</div>
        </div>
        <div className="white-vert--1 white-background"></div>
        <Container className="padded-6y">
          <Navigation/>
          <Grid className="grid-container" container spacing={2}>            
            <Grid className="welcome-image-wrapper padded-4y" item xs={6}>
              <div className="welcome-image--offset-box gray-box--1"></div>
              <div className="welcome-image"></div>
            </Grid>
            <Grid className="padded-4y padded-6x gray-font--1" item xs={6}>
              <h1 className="font--alegreya welcome-title">Welcome.</h1>
              <p className="font--roboto welcome-description">{WELCOME.description}</p>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}