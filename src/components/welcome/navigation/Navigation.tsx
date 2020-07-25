import React from 'react';

import './Navigation.css';

export class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation-wrapper font--sacramento">
        <div className="navigation-line-wrapper">
          <div className="navigation-line"></div>
        </div>
          <a href="/about-me" className="padded-2x navigation-item gray-font--1">about me.</a>
      </div>
    );
  }
}