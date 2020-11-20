import React, { Component } from 'react';
import Particles from 'react-particles-js';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import './App.css';

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

class App extends Component {
  constructor() {
    super()
    this.state = {
      incidents: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ incidents: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { incidents, searchfield } = this.state;
    const filteredIncident = incidents.filter(incident =>{
      return incident.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !incidents.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Particles  className='particles' params={particlesOptions}/>
          <h1 className='f1'>311 Chicago IL incidents</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList incidents={filteredIncident} />
          </Scroll>
        </div>
      );
  }
}

export default App;
