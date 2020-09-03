import React from 'react';
import { Router, Route } from "react-router-dom"; 
import './App.css';
import { createBrowserHistory as createHistory } from "history";  
import {ErrorBoundary} from 'react-error-boundary'


import Header from "./components/header.component";  
import HomePage from './pages/home-page.component';
import CardSearchPage from './pages/search-page.component';
//import ErrorFallback from './components/error-fallback.component';

const history = createHistory();

const ErrorFallback = ({ error}) => {
  return (
      <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>     
      </div>
  )
};

function App() {  
  return (  
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    >
    <div className="App">  
      <Router history={history}>  
        <Header />  
        <Route path="/" exact component={HomePage} />  
        <Route path="/search" exact component={CardSearchPage} />  
      </Router>  
    </div>  
    </ErrorBoundary>
  );  
}


export default App;