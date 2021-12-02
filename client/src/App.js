
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import SearchFoods from './pages/SearchFoods';
import SavedFoods from './pages/SavedFoods';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import TrackFood from './components/Body';
import inputArea from './components/inputBar';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";


// import saveBtn from './components/saveBtn';
// import contentList from './components/contentList';


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <>
    <Navbar />
    {/* <Switch>
      <Route exact path='/' component={SearchFoods}/>
    </Switch> */}
    <Header />
    <timeBtn />
    <btnNav />
    <inputArea />
    <contentList />
    <TrackFood />
    </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
