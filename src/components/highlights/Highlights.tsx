import React, { RefObject } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { HIGHLIGHTS } from '../../constants/highlights.constant';
import { IHighlight } from '../../models/highlight.interface';

import './Highlights.css';

export class Highlights extends React.Component<{}, {display: string}> {
  highlightsRef: RefObject<any>;

  constructor(props) {
    super(props);
    this.highlightsRef = React.createRef();
    this.state = {
      display: 'highlights-hide'
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    try {
      const offset = this.highlightsRef.current.offsetTop - (window.screen.height*0.4);
      if (window.scrollY > offset) {
        this.setState({
          display: 'highlights-show'
        });
      }
    } catch {

    }
  }

  render() {
    return (
      <div className="highlights-section section--wrapper font--roboto" ref={this.highlightsRef}>
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
                    <li key={highlights.key} className={`${this.state.display} highlights-item`}>{highlights.description}</li>
                  )
                })}
              </ul>
            </Grid>
          </Grid>
        </Container>
        <div className="highlights-logo-container">
          <img src="assets/logos/angular.png"></img>
          <img src="assets/logos/react.png"></img>
          <img src="assets/logos/node.png"></img>
          <img src="assets/logos/html5.png"></img>
          <img src="assets/logos/symfony.png"></img>
        </div>
      </div>
    );
  }
}