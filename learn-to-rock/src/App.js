import React from 'react';
import './App.css';
import Hello from './sayHello';
import EsSix from './EsSixFile';

function App() {

  return (
    <div>
      <div className="navbar">
        <div className="nav">
          <div className="leftside">
            <li className="navs">Home</li>
            <li className="navs">Profile</li>
            <li className="navs">Gallery</li>
          </div>
          <div className="rightside">
            <li className="log" >Log In</li>
            <li className="log">Register</li>
          </div>
        </div>
      </div>
      <div className="container">
        <Hello  name="Shashi" age="26"/>
        <Hello  name="Bhushan" age="24"/>
        <Hello  name="Bhagat" age="22"/>
        <Hello  name="Vaibhav" age="25"/>
        <Hello  name="Divyanshu" age="25"/>
        <Hello  name="Raja" age="27"/>
      </div>
      <EsSix message="This is new es6 feature to replace props."/>
    </div>
  );
}

export default App;