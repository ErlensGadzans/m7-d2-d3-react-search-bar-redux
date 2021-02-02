import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

class NavBar extends React.Component {
  state = {
    jobTitle: "",
    area: "",
    jobs: [],
  };

  // fetch from the api with the data from the state
  // save the data in the state

  getResults = async (jobTitle, area) => {
    try {
      const response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.jobTitle}&location=${this.state.area}`
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        this.setState({
          ...this.state,
          jobs: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.getResults(this.state.jobTitle, this.state.area);

    // console.log(this.state.jobTitle);
    // console.log(this.state.area);
  };

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
              <Button
                variant="outline-success"
                type="submit"
                // onClick={this.getResults}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          {this.state.jobs &&
            this.state.jobs.map((jobs) => <SingleCard jobs={jobs} />)}
        </Row>
      </div>
    );
  }
}

export default NavBar;
