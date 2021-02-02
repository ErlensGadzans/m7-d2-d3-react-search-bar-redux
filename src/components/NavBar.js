import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Job Search Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Job title"
              className="mr-sm-2"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Form inline>
            <FormControl type="text" placeholder="Area" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
