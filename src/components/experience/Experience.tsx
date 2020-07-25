import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { EXPERIENCE } from '../../constants/experience.constant'

import './Experience.css';
import { IExperience } from '../../models/experience.interface';

export class Experience extends React.Component {
  render() {
    return (
      <div className="section--wrapper experience-wrapper">
        <div className="purple-box--2 purple-background"></div>
        <Container className="padded-6y">
          <Grid className="grid-container" container spacing={2}>
            <Grid className="padded-4x" item xs={6}>
              <div className="experience-title-container">
                <p className="font--sacramento white-font">Experience</p>
                <div className="experience-line white-background"></div>
              </div>

              <div className="experience-list">
                {EXPERIENCE.map((exp:IExperience) => {
                  return (<p className="gray-font--1 font--roboto" key={exp.key}><strong>{exp.title}</strong> {exp.description}</p>)
                })}
              </div>
            </Grid>

            <Grid className="padded-6x experience-image" item xs={6}>
              {/* <div className="experience-image"></div> */}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}