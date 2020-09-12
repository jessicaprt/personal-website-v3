import React from 'react';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import { AboutMe } from './components/about-me/AboutMe';
import { PageInfo } from './components/page-info/PageInfo';
import { Homepage } from './components/homepage/Homepage';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/page-info' component={PageInfo} />
      </div>
    </HashRouter>
  );
}

export default App;
