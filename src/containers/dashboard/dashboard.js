//fetch all data using action and pass it on to other componenets
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Dashboard from "../../components/dashboard/dashboard";

const dashboard = ({ category }) => {
  console.log(category);
  return <Dashboard category={category} />;
};
dashboard.propTypes = {
  category: PropTypes.string,
};
const mapStateToProps = (state) => ({
  category: state.auth.category,
});
export default connect(mapStateToProps, {})(dashboard);
