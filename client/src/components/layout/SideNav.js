import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./BFWLogo_Tiny_190807.png";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <img src={logo} className="logo" alt="logo" />
        <a href="#">Home</a>
        <a href="#">Downloads</a>
        <a href="#">FB</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    );
  }
}

export default SideNav;
