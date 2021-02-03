import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import DetailPage from "./components/DetailPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./store";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar title="JobSearchBar" />
        <Home />

        {/*
        <Router path="/details/:id">
          <DetailPage jobs={this.state.jobs} />
        </Router>
         */}
      </Provider>
    );
  }
}

export default App;
