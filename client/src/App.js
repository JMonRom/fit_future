import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import saveBtn from './components/saveBtn';
import content from './components/content';
import contentList from './components/contentList';


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <btnNav />
    <contentList />
    </>
  );
}

export default App;
