import React from 'react';
import { Welcome } from './welcome/Welcome';
import { Experience } from './experience/Experience';
import { Highlights } from './highlights/Highlights';
import { CustomFooter } from '../footer/CustomFooter';

export class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Welcome/>
        <Experience/>
        <Highlights/>
        <CustomFooter/>
      </div>
    );
  }
}