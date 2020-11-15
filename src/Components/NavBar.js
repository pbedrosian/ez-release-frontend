import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to='/'>EZ-Release</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to='/release-forms' >Release Forms</Nav.Link>
                <Nav.Link as={Link} to='/new-release'>New Release</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default Navigation;