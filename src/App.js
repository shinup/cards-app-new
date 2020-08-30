import React from 'react';
import { Router, Route } from "react-router-dom"; 
import './App.css';
import { createBrowserHistory as createHistory } from "history";  


import Header from "./components/header.component";  
import HomePage from './pages/home-page.component';
import CardSearchPage from './pages/search-page.component';

const history = createHistory();

function App() {  
  return (  
    <div className="App">  
      <Router history={history}>  
        <Header />  
        <Route path="/" exact component={HomePage} />  
        <Route path="/search" exact component={CardSearchPage} />  
      </Router>  
    </div>  
  );  
}
export default App;