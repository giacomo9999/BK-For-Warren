const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegisterInput = data => {
  let errors = {};

  // Convert empty fields to empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required.";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "E-mail field is required.";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "E-mail is invalid";
  }

  // Password check
  if (Validator.isEmpty(data.password)) {
    errors.name = "Password field is required.";
  }

  // Password Confirm check
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required.";
  }

  // Password length checks
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  // Password length checks
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return { errors, isValid: isEmpty(errors) };
};
