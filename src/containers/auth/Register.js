import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import Present_register from "../../components/auth/Register";
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    id: "",
  });
  let { name, email, password, dob, id } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    console.log("hi");
    console.log("inside on submit", name);
    e.preventDefault();
    name = "CAR" + name;
    console.log("updated name is ", name);

    register({ name, email, password, dob, id });
    console.log("after register");
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Present_register
      isAuthenticated={isAuthenticated}
      onChange={onChange}
      onSubmit={onSubmit}
      formData={formData}
    />
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
