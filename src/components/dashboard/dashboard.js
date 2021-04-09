import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import image2 from "../../img/add4.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Redirect } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginTop: 20,
    maxHeight: 600,
  },
  a: {
    height: 50,
    fontSize: 30,
    width: 250,
    backgroundColor: "black",
    color: "white",
  },
  // b: {
  //  padding:0,
  // },
});
const Dashboard = ({ category }) => {
  const classes = useStyles();
 
    return (
      <Fragment>
        {" "}
        <Fragment>
          <br />
          <br />
          <br />
          <center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h2 className={classes.b}  className="large">
                    <PersonIcon fontSize="large" /> You are added to the network!
                  </h2>
                  <br />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {/* <Link to="/addbus"> */}
                    <Button className={classes.a}>Public Key</Button>
                  {/* </Link> */}
                  <br /> <br />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {/* <Link to="/getallbuses"> */}
                    <Button className={classes.a}>Private Key</Button>
                  {/* </Link> */}
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </Card>

            <br />
          </center>
        </Fragment>
        <br /> <br />
        <Fragment>
          <center></center>
        </Fragment>
      </Fragment>
    );

};

Dashboard.propTypes = {
  category: PropTypes.string,
};

export default Dashboard;