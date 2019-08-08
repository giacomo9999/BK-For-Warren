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
        <h3>Log In to Brooklyn For Warren</h3>

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
          <div className="spacer5" />
          <button type="submit">Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </form>
        <Link to="/register">
          <button>Don't Have An Account?</button>
        </Link>
      </div>
    );
  }
}

export default Login;
