import React, { Component } from 'react';
import IncidentsList  from './IncidentsList'
import Particles from 'react-particles-js';
import './Homepage.css';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class Homepage extends Component{
  render() {
    return (
      <div>
        <div>
            <IncidentsList />
            <Particles  className='particles' params={particlesOptions}/>
        </div>
      </div>
    );
  }
}

export default Homepage;