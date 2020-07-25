import React from 'react';
import './App.css';

import { Welcome } from './components/welcome/Welcome';
import { Experience } from './components/experience/Experience';
import { Highlights } from './components/highlights/Highlights';
import { CustomFooter } from './components/footer/CustomFooter';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Experience/>
      <Highlights/>
      <CustomFooter/>
    </div>
  );
}

export default App;
