import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "", errors: {} };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = { email: this.state.email, password: this.state.password };
    console.log(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container-inner">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/register">
          <h4>Don't have an account?</h4>
        </Link>
        <form className="h-form" noValidate onSubmit={this.onSubmit}>
          <label className="h-label">E-Mail</label>
          <input
            className="h-input"
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="text"
          />
          <label className="h-label">Password</label>
          <input
            className="h-input"
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="text"
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;
