//fetch all data using action and pass it on to other componenets
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Dashboard2 from "../../components/dashboard/dashboard2";

const dashboard2 = () => {
  return <Dashboard2 />;
};
dashboard2.propTypes = {};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(dashboard2);
