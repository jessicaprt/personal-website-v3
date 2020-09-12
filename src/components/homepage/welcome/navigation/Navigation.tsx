import React from 'react';

import './Navigation.css';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation-wrapper font--sacramento">
        <div className="navigation-line-wrapper">
          <div className="navigation-line gray-background--1"></div>
        </div>
          <span className="padded-2x navigation-item gray-font--1"><Link to="/about-me">about me.</Link></span>
      </div>
    );
  }
}