import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="JobSearchBar" />
      </>
    );
  }
}

export default App;
