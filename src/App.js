import Header from './components/Header'
import IncidentsList  from './components/IncidentsList'
import Particles from 'react-particles-js';
import AppNav from './components/AppNav';
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

function App() {
  return (
    <div className="App">
      <AppNav />
      <Header />
      <div>
          <IncidentsList />
          <Particles  className='particles' params={particlesOptions}/>
        </div>
    </div>
  );
}

export default App;
