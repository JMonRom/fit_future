import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import saveBtn from './components/saveBtn';
import contentList from './components/contentList';
import BlogFood from './components/Body';


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <btnNav />
    <contentList />
    <BlogFood />
    </>
  );
}

export default App;
