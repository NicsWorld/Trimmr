import React from 'react';
import './App.scss';
import Header from './components/Header';
import ComingSoon from './components/ComingSoon';
import hero from './trimmr-hero.jpg';
import logo from './trimmr-logo1.png';

function App() {
  return (
    <div className="App">
      <div className="hero">
      <span className="gradient-overlay"></span>
        <img className="hero-image" src={hero}/>
        <div className="hero-text">
        <div>
          <div className="title">Trimmr</div>
          <div className="subtext">Get a hair cut from home</div>
        </div>
        </div>
      </div>
        <img src={logo}/>
        <div className="welcome">
          <h3>Welcome to Trimmr. Hair cuts made easy</h3>
          <p>With Trimmr, you choose the stylist, and they come to you.</p>
        </div>
          <h3>Enter your Zip Code to get started</h3>
          <input className="zip_code" placeholder="Zip Code" />
    </div>
  );
}

export default App;
