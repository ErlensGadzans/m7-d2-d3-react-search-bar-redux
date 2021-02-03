import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class DetailPage extends Component {
  render() {
    return this.props.singleJob ? (
      <>
        <Container>
          <Row className="homepage2">
            <Col xs={12}>
              <h1 className="jobTitle">{this.props.singleJob.title}</h1>
            </Col>
            <Col xs={12}>
              <h4>
                {this.props.singleJob.location}, {this.props.singleJob.type}
              </h4>
            </Col>
          </Row>

          <Row className="bg-colour-change2 ">
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center"
            >
              <h4>{this.props.singleJob.company}</h4>
            </Col>
          </Row>
        </Container>
      </>
    ) : (
      <div>There is no job like you requested.</div>
    );
  }
}

export default connect(mapStateToProps)(DetailPage);
