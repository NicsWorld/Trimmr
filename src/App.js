import React from 'react';
import './App.scss';
import Header from './components/Header';
import Google from './components/sign-in/Google';
import hero from './trimmr-hero.jpg';
import logo from './trimmr-logo1.png';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyCVvdBIU2ze8jL9Tdw8rmDa4CrP6J2cKnw",
  authDomain: "trimmr.firebaseapp.com",
  databaseURL: "https://trimmr.firebaseio.com",
  projectId: "trimmr",
  storageBucket: "trimmr.appspot.com",
  messagingSenderId: "5235543284",
  appId: "1:5235543284:web:cf7478d4013c90e777e2a1",
  measurementId: "G-VSQM6D4PR7"
});

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
          <h3>Create a free account to get started</h3>
          <div className="registerGoogle">
            <Google />
          </div>
    </div>
  );
}

export default App;
