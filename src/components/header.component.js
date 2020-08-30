
import React from "react";  
import { useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";  
import Nav from "react-bootstrap/Nav";  
import { withRouter } from "react-router-dom";

const Header = ({ location }) => {   
    useEffect(() => {}); 
    return (  
      <Navbar bg="dark" expand="lg" variant="dark">       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="mr-auto">  
            <Nav.Link href="/" active={location.pathname === "/"}>  
              Home  
            </Nav.Link>  
            <Nav.Link  
              href="/search"  
              active={location.pathname === "/search"}  
            >  
              Search  
            </Nav.Link>  
          </Nav>  
        </Navbar.Collapse>  
      </Navbar>  
    );  
  }    
  export default withRouter(Header);