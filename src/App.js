import React, { Component } from 'react';
import AddIncident from './components/AddIncident';
import Homepage from './components/Homepage';
import Queries from './components/Queries';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/" className="navbar-brand">
                311 CI Incidents
              </a>
              <div className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={"/homepage"} className="nav-link">
                    Homepage
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/queries"} className="nav-link">
                    Queries
                  </Link>
                </li>
              </div>
              <li className="nav-item">
                  <div className="float-left">
                  Aristotelis Pozidis CS1200002
                  </div>
              </li>
            </nav>
            <Switch>
              <Route exact path={["/", "/homepage"]} component={Homepage} />
              <div className="container mt-3">
              <Route exact path="/add" component={AddIncident} />
              <Route exact path="/queries" component={Queries} />
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
