import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export class DetailPage extends Component {
  render() {
    const job = this.props.jobs.find(
      (job) => job.id === this.props.match.params.id
    );
    console.log("This is job", job); //job is undefine???
    return job ? (
      <>
        <Row className="homepage2">
          <Col xs={12}>
            <h1 className="jobTitle">{job.title}</h1>
          </Col>
          <Col xs={12}>
            <h4>
              {job.location}, {job.type}
            </h4>
          </Col>
        </Row>

        <Row className="bg-colour-change2 ">
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h4>{job.company}</h4>
          </Col>
        </Row>
      </>
    ) : (
      <div>There is no job like you requested.</div>
    );
  }
}

export default withRouter(DetailPage);
