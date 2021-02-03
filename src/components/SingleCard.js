import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleCard extends Component {
  render() {
    return (
      <div>
        <Col xs={12} className="my-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.job.company_logo} />
            <Card.Body>
              <Card.Title>{this.props.job.title}</Card.Title>
              <Card.Text> {this.props.job.location}</Card.Text>
              <Link to={"/details/" + this.props.job.id}>
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

export default SingleCard;
