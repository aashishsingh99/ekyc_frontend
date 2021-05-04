import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, login2 } from "../../actions/auth";
import Present_login from "../../components/auth/Login";
const io = require("socket.io-client");
// const socket = io();
const temp = "http://LocalHost:5000";
const socket = io(temp, { transports: ["websocket"] });

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    user_type: "",
  });
  const { email, password, user_type } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (user_type == "client") {
      login({ email: email, password: password, user_type: user_type });
      console.log("redirecting");
    } else {
      login2({ email: email, password: password, user_type: user_type });
      return <Redirect to="/dashboard2" />;
    }

    console.log("Success");
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Present_login
      isAuthenticated={isAuthenticated}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
