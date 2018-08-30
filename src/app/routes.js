import React from 'react';
import { Route } from 'react-router-dom';
import HomeIndex from './components/index_home';
import Mission from './components/Mission';
import Projects from './components/Projects';
import People from './components/People';

export default function getRoutes() {
  return (
    <div>
      <Route exact path='/' component={HomeIndex} />
      <Route exact path='/mission' component={Mission} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/people' component={People} />
    </div>
  );
}
