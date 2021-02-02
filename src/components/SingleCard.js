import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SingleCard extends Component {
  //   handleSubmit = (element) => {
  //     element.preventDefault();
  //     this.props.getJob(this.props.jobTitle);
  //     this.props.history.push("/details/");
  //   };

  render() {
    return (
      <div>
        <Col xs={12} className="my-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.jobs.company_logo} />
            <Card.Body>
              <Card.Title>{this.props.jobs.title}</Card.Title>
              <Card.Text> {this.props.jobs.location}</Card.Text>
              <Link to={"/details/" + this.props.jobs.id}>
                <Button
                  variant="primary"
                  //   onClick={(element) => this.handleSubmit(element)}
                >
                  Details
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
