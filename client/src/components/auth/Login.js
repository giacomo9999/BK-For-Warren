import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "", errors: {} };
  }

  componentDidMount() {
    // Redirects to Dashboard if logged-in user attempts to navigate to Register page
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they log in
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = { email: this.state.email, password: this.state.password };
    console.log(userData);
    this.props.loginUser(userData);
    // Since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container-inner">
        <h3>Log In to Brooklyn For Warren</h3>

        <form className="h-form" noValidate onSubmit={this.onSubmit}>
          <label className="h-label">E-Mail</label>
          <span className="red-error-text">
            {errors.email}
            {errors.emailnotfound}
          </span>
          <input
            className={classnames("h-input", {
              invalid: errors.email || errors.emailnotfound
            })}
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="text"
          />
          <label className="h-label">Password</label>
          <span className="red-error-text">
            {errors.password}
            {errors.passwordincorrect}
          </span>

          <input
            className={classnames("h-input", {
              invalid: errors.password || errors.passwordincorrect
            })}
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
          />
          <div className="spacer5" />
          <button type="submit">Log In</button>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
