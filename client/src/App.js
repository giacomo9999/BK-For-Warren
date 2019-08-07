import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./components/layout/SideNav";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <Landing />
        </div>
      </Router>
    );
  }
}

export default App;
