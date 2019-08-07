import React, { Component } from "react";
import "./App.css";
import SideNav from "./components/layout/SideNav";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Landing />
      </div>
    );
  }
}

export default App;
