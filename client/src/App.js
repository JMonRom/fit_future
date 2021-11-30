
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";

import Navbar from "./components/Navbar";
// import SearchFoods from './pages/SearchFood';
import Header from "./components/Header";
// import saveBtn from './components/saveBtn';
import contentList from './components/contentList';
import TrackFood from './components/Body';


function App() {
  return (
    <Router>
    <>
    
    <Navbar />
    {/* <Switch>
      <Route exact path='/' component={SearchFoods}/>
    </Switch> */}
    <Header />
    <timeBtn />
    <btnNav />
    <saveBtn/>
    <contentList />
    <TrackFood />
    </>
    </Router>
  );
}

export default App;
