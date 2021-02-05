import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import MainBody from "./components/mainContainer/MainBody";
import Footer from "./components/footer/Footer";
import Projects from './components/Pages/Projects'
import VideoPage from "./components/Pages/VIdeoPage";

function App() {

  return (
    <div>
        <Navbar/>
        <MainBody/>
        <Projects/>
        <VideoPage/>
        <Footer/>
    </div>
  );
}

export default App;