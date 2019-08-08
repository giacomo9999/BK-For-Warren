import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container-inner">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <h4>Already have an account?</h4>
        </Link>
        <form className="h-form" noValidate onSubmit={this.onSubmit}>
          <label className="h-label">Name</label>
          <input
            className="h-input"
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
          />
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
          <label className="h-label">Repeat Password</label>
          <input
            className="h-input"
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="text"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Register;
