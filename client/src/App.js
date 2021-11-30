// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import SearchFoods from './pages/SearchFood';
import Header from "./components/Header";


function App() {
  return (
    <Router>
    <>
    <Navbar />
    {/* <Switch>
      <Route exact path='/' component={SearchFoods}/>
    </Switch> */}
    <Header />
    </>
    </Router>
  );
}

export default App;
