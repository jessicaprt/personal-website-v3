import React, { RefObject } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { EXPERIENCE } from '../../constants/experience.constant'

import './Experience.css';
import { IExperience } from '../../models/experience.interface';

export class Experience extends React.Component<{}, {display: string}> {
  experienceTitleRef: RefObject<any>;
  experienceTitleRef2: any;

  constructor(props) {
    super(props);
    this.experienceTitleRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      display: 'experience-hide'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    try {
      const offset = this.experienceTitleRef.current.offsetTop - (window.screen.height*0.4);
      if (window.scrollY > offset) {
        this.setState({
          display: 'experience-show'
        })
      }
    } catch {

    }
  }

  render() {
    return (
      <div ref={this.experienceTitleRef} className="section--wrapper experience-wrapper">
        <div className="purple-box--2 purple-background"></div>
        <Container className="padded-6y">
          <Grid className="grid-container" container spacing={2}>
            <Grid className="padded-4x" item xs={6}>
              <div className={this.state.display + " experience-title-container"}>
                <p className="font--sacramento white-font">Experience</p>
                <div className="experience-line white-background"></div>
              </div>

              <div className={this.state.display + " experience-list"}>
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