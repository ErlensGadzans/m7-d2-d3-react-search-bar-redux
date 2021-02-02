import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";

import DetailPage from "./components/DetailPage";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  state = {
    jobs: [],
  };

  render() {
    return (
      <>
        <NavBar title="JobSearchBar" />

        <Router path="/details/:id">
          <DetailPage jobs={this.state.jobs} />
        </Router>
      </>
    );
  }
}

export default App;
