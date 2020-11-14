import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Test from './test'

const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>Release Forms</Nav.Link>
                <Nav.Link>New Release</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default Navigation;