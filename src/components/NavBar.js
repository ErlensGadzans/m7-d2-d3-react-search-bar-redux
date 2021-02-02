import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

class NavBar extends React.Component {
  state = {
    jobTitle: "",
    area: "",
    results: [],
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.jobTitle);
    console.log(this.state.area);
  };
  async componentDidMount() {
    const response = await fetch(
      `https://jobs.github.com/positions.json?description=${this.state.jobTitle}&location=${this.state.area}`
    );
    const json = await response.json();
    this.setState({ jobTitle: this.state.jobTitle }, { area: this.state.area });
  }

  render() {
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
            <Form inline onSubmit={this.handleSubmit}>
              <FormControl
                type="text"
                placeholder="Job title"
                className="mr-sm-2"
                onChange={(event) => {
                  this.setState({ jobTitle: event.target.value });
                }}
              />
              {/* <Button variant="outline-success">Search</Button> */}

              <FormControl
                type="text"
                placeholder="Area"
                className="mr-sm-2"
                onChange={(event) => {
                  this.setState({ area: event.target.value });
                }}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          {this.state.results &&
            this.state.results.map((item) => <SingleCard item={item} />)}
        </Row>
      </div>
    );
  }
}

export default NavBar;
