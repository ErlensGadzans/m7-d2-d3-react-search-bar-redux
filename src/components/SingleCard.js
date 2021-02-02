import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

export default class SingleCard extends Component {
  render() {
    return (
      <div>
        <Col xs={12} className="my-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.job.company_logo} />
            <Card.Body>
              <Card.Title>{this.props.job.title}</Card.Title>
              <Card.Text>
                {" "}
                {this.props.job.location}, {this.props.job.type}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
