import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import MainBody from "./components/mainContainer/MainBody";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div>
        <Navbar/>
        <MainBody/>
        <Footer/>
    </div>
  );
}

export default App;