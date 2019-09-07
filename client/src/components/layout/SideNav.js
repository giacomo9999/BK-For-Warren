import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./BFWLogo_Tiny_190807.png";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <img src={logo} className="logo" alt="logo" />
        <Link to="/">Home</Link>

        <a href="/downloads">Downloads</a>
        <a href="http://www.facebook.com">FB</a>
        <a href="http://www.twitter.com">Twitter</a>
        <a href="http://www.instagram.com">Instagram</a>
        <div className="spacer10" />

        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <div className="spacer10" />
      </div>
    );
  }
}

export default SideNav;
