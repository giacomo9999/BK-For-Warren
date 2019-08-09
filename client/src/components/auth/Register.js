import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container-inner">
        <h3>Register With Brooklyn For Warren</h3>
        <form className="h-form" noValidate onSubmit={this.onSubmit}>
          <label className="h-label">Name</label>
          <span className="red-error-text">{errors.name}</span>
          <input
            className={classnames("h-input", { invalid: errors.name })}
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
          />
          <label className="h-label">E-Mail</label>
          <span className="red-error-text">{errors.email}</span>
          <input
            className={classnames("h-input", { invalid: errors.email })}
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="text"
          />
          <label className="h-label">Password</label>
          <span className="red-error-text">{errors.password}</span>
          <input
            className={classnames("h-input", { invalid: errors.password })}
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="text"
          />
          <label className="h-label">Repeat Password</label>
          <span className="red-error-text">{errors.password2}</span>
          <input
            className={classnames("h-input", { invalid: errors.password2 })}
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="text"
          />
          <div className="spacer5" />
          <button type="submit">Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </form>
        <Link to="/login">
          <button>Login With Existing Account</button>
        </Link>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
