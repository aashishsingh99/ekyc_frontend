import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { register2 } from "../../actions/auth";
import Present_register2 from "../../components/auth/Register2";
const Register2 = ({ setAlert, register2, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    
  
  });
  const { name,password} = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
    // if (password !== password2) setAlert("Passwords dont match", "danger");
  register2({ name,password });
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Present_register2
      isAuthenticated={isAuthenticated}
      onChange={onChange}
      onSubmit={onSubmit}
      formData={formData}
    />
  );
};
Register2.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register2: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register2 })(Register2);
