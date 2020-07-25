import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { HIGHLIGHTS } from '../../constants/highlights.constant';
import { IHighlight } from '../../models/highlight.interface';

import './Highlights.css';

export class Highlights extends React.Component {
  render() {
    return (
      <div className="section--wrapper font--roboto">
        <Container className="padded-6y">
          <div className="highlights-title-container padded-4x gray-font--1">
            <div className="highlights-title">Highlights</div>
            <div className="highlights-line gray-background--1"></div>
          </div>

          <Grid className="grid-container" container spacing={2}>
            <Grid className="padded-4x highlights-image" item xs={4}></Grid>
            <Grid className="padded-4x padded-4y" item xs={8}>
              <ul className="highlights-list">
                {HIGHLIGHTS.map((highlights: IHighlight) => {
                  return(
                    <li key={highlights.key}>{highlights.description}</li>
                  )
                })}
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}