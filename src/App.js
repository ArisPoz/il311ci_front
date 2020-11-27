import Header from './components/Header'
import IncidentsList  from './components/IncidentsList'
import Particles from 'react-particles-js';
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
      <Header />
      <div className="">
          <IncidentsList />
          <Particles  className='particles' params={particlesOptions}/>
        </div>
    </div>
  );
}

export default App;
