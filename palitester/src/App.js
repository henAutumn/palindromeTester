import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/site/Home'
import Tester from './components/tester';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
          <div className = "App-intro"> <Home /> </div>
          <Tester />
      </div>
    );
  }
}

export default App;
