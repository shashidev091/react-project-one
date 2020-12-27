import React from 'react';
import './App.css';

function App() {
  let a = 0;

  const sayHello = () => {
    console.log("Yahooooo");
  }
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
            <li className="log" onClick={sayHello}>Log In</li>
            <li className="log">Register</li>
          </div>
        </div>
      </div>
      <div className="container">
        {}
      </div>
    </div>
  );
}

export default App;