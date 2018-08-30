import React, { Component } from 'react';
import { PeopleBios } from '../constants/peopleBios';

export default class App extends Component {
  renderPeopleBios = () => {
    return Object.keys(PeopleBios).map((person, key) => {
      const { name, title, bio } = PeopleBios[person];
      return (
        <div key={key}>
          <h4>{name} &mdash; {title}</h4>
          <p>{bio}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='people'>
        <h2>People</h2>
        {this.renderPeopleBios()}
      </div>
    );
  }
}
