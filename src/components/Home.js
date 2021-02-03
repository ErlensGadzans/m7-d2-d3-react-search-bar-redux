import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { connect } from "react-redux";
/*


on form submit ->
    fetch from the api with the data from the state
    save the data in the state
    //display the results from the state



Form {
- input searchbar x2 when updated, the state updates
- submit button
}

{
    this.state.results && 
    this.state.results.map.........
}

*/
const mapStateToProps = (state) => state;

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <Row>
        {this.props.jobs &&
          this.props.jobs.map((job) => (
            <SingleCard key={new Date() + Math.random()} job={job} />
          ))}
      </Row>
    );
  }
}

export default connect(mapStateToProps)(Home);
