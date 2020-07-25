import React from 'react';

import './Navigation.css';

export class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation-wrapper font--sacramento">
        <div className="navigation-line-wrapper">
          <div className="navigation-line"></div>
        </div>
          <div className="padded-2x navigation-item">about me.</div>
      </div>
    );
  }
}