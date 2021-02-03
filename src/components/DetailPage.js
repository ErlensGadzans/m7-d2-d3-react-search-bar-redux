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
              <img
                src={this.props.singleJob.company_logo}
                className="image"
                alt={"logo"}
              />
            </Col>
            <Col xs={12}>
              <h3 className="jobTitle">{this.props.singleJob.title}</h3>
            </Col>
            <Col xs={12}>
              <h4>{this.props.singleJob.location}</h4>
            </Col>
          </Row>

          <Row className="bg-colour-change2 ">
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center"
            >
              <small>
                <b>Descriprion:</b>
                {this.props.singleJob.description}
              </small>
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
