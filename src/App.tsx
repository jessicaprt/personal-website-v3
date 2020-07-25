import React from 'react';
import './App.css';

import { Welcome } from './components/welcome/Welcome';
import { Experience } from './components/experience/Experience';
import { Highlights } from './components/highlights/Highlights';
import { CustomFooter } from './components/footer/CustomFooter';

import { BrowserRouter, Route } from 'react-router-dom';
import { AboutMe } from './components/about-me/AboutMe';
import { PageInfo } from './components/page-info/PageInfo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} 
          path='/'
          render={() => (
            <div className="App">
              <Welcome/>
              <Experience/>
              <Highlights/>
              <CustomFooter/>
          </div>
        )}/>

        <Route exact={true} 
          path='/about-me'
          render={() => (
            <div className="App">
              <AboutMe/>
              <CustomFooter/>
            </div>
        )}/>

        <Route exact={true} 
          path='/page-info'
          render={() => (
            <div className="App">
              <PageInfo/>
              <CustomFooter/>
            </div>
        )}/>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
