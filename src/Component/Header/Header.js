import React from 'react';
import { Button,  Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
     <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link to="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to="/donation">Donation</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to="/events">Events</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to ="/blog">Blog</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to="/register">Register</Nav.Link>
    </Nav.Item>
    
      
   
  </Nav>
        </div>
    );
};

export default Header;