import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import configureStore from "./store";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar title="JobSearchBar" />
        <Route path="/" exact render={(props) => <Home {...props} />} />

        <Route path="/details/" render={(props) => <DetailPage {...props} />} />
      </Provider>
    );
  }
}

export default App;
