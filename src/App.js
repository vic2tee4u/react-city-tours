import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/Navbar';
import TourList from './components/TourList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <TourList/>
      </div>
    );
  }
}

export default App;
