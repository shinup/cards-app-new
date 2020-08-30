import React from 'react';
import HomePage from './pages/home-page.component';
import { Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">   
        <Navbar bg="dark" expand="dark" variant="dark" >
          <Navbar.Brand href="/">Cards</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Navbar>
        <HomePage/> 
    </div>
  );
}
export default App;