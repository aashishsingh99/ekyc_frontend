import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import image2 from "../../img/add4.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";
import green from "@material-ui/core/colors/green";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Redirect } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { Get_keys } from "../../actions/Get_keys";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PhotoIcon from "@material-ui/icons/Photo";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import { all_users } from "../../actions/auth";
import { Approve } from "../../actions/auth";
import { borders } from "@material-ui/system";
import Box from "@material-ui/core/Box";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 180,
    marginTop: 20,
  },
  media: {
    marginTop: 50,
    height: 140,
  },
  ab: {
    width: 150,
    backgroundColor: "black",
    color: "white",
  },
});

const Dashboard2 = ({ all_users, users, Approve }) => {
  useEffect(() => {
    // check for token in LS

    all_users();
  }, []);
  const classes = useStyles();

  const onSubmit = ({ e, user }) => {
    // e.preventDefault();
    console.log("inside on submit");
    console.log(user);
    console.log("calling approve");

    Approve(user);
    all_users();

    console.log("outside approve");
  };
  return (
    <Fragment>
      <Fragment>
        <div className="bus_items">
          {users.length > 0 ? (
            users.map((user) => (
              <Fragment>
                {console.log(user.Key)}
                {parseInt(user.Key.substring(3)) > 9 ? (
                  <Card className={classes.root}>
                    <Box border={1}>

                    <CardActionArea>
                      {/* <CardMedia className={classes.media} image={img} title={bus.bus_id} /> */}
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {user.Key.substring(3)}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Email:{user.Record.make} <br />
                          DOB:{user.Record.color} <br />
                          {user.Record.owner === "Verified" ? (
                            <Fragment>
                              {" "}
                              <div>
                                <h1>
                                  Verified
                                  <CheckCircleIcon
                                    style={{ color: "green" }}
                                  ></CheckCircleIcon>
                                </h1>
                              </div>
                            </Fragment>
                          ) : (
                            <Fragment></Fragment>
                          )}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Link>
                        {" "}
                        <Button
                          className={classes.ab}
                          type="submit"
                          variant="contained"
                          value="login"
                          disabled={user.Record.owner === "Verified"}
                          onClick={(e) => onSubmit({ e, user })}
                        >
                          {" "}
                          Approve{" "}
                        </Button>
                      </Link>{" "}
                    </CardActions>
                    </Box>
                  </Card>
                ) : (
                  <Fragment></Fragment>
                )}
              </Fragment>
            ))
          ) : (
            <h4>No Users found</h4>
          )}
        </div>
      </Fragment>
    </Fragment>
  );
};

// <Fragment>
//     {
//       <div className="bus_items">

//         {users && users.length > 0 ? (

//         users.map((user) => (
//           <Fragment>

//           <Card className={classes.root}>
//           <CardActionArea>
//             {/* <CardMedia className={classes.media} image={img} title={bus.bus_id} /> */}
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {"Sakshi"} to {"bus.to"}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Start At: {"bus.start_time"}
//                 <br />
//                 End At:{"bus.end_time"}
//               </Typography>
//             </CardContent>
//           </CardActionArea>

//           <CardActions>
//             <Link to={`/api/users/bus/${"bus._id"}`}>
//               {" "}
//               <Button
//                 className={classes.ab}
//                 type="submit"
//                 variant="contained"
//                 value="login"
//               >
//                 {" "}
//                 View Bus{" "}
//               </Button>
//             </Link>{" "}
//           </CardActions>
//         </Card>
//         </Fragment>

//         ))
//       )
//        :
//        (
//         <h4>No users found</h4>
//       )
//        }

//     </div>
//     }
//   </Fragment>
//   //<div>Hi</div>
//   );

// };

Dashboard2.propTypes = {};

const mapStateToProps = (state) => ({
  // category: state.auth.category,
  users: state.auth.users,
});

export default connect(mapStateToProps, { all_users, Approve })(Dashboard2);
