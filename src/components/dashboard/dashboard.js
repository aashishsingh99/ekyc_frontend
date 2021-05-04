import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import image2 from "../../img/add4.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";
import green from "@material-ui/core/colors/green";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Redirect } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Typography from "@material-ui/core/Typography";
import { Get_keys } from "../../actions/Get_keys";
import { Notify } from "../../actions/Notify";
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

  b: {
    height: 20,
    fontSize: 16,
    width: 250,
    backgroundColor: "black",
    color: "white",
    fontFamily: "Times New Roman",
  },
  sak: {
    fontSize: 25,
  },
});
const useStylesForm = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "10ch",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Dashboard = ({
  category,
  name,
  user,
  Get_keys,
  auth,
  public_key,
  private_key,
  Notify,
  current_user,
}) => {
  const classes = useStyles();
  const [status, setstatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const classes1 = useStylesForm();

  const onSubmit = (e) => {
    setOpen(true);
    console.log("going to call action");

    const dam = name;
    Get_keys(dam);

    console.log("done action call");
  };
  const onSubmit2 = (e) => {
    setOpen2(true);
    console.log("going to call action");

    const dam = name;
    Get_keys(dam);

    console.log("done action call");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const submit = (e) => {
    e.preventDefault();

    handleClose();
  };
  const onSubmit3 = ({ e, user }) => {
    console.log("calling notify action", user);
    Notify({ user });
    setOpen2(true);
  };
  return (
    <div>
      <Fragment>
        {}{" "}
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
                  <div
                    fontSize="large"
                    className={classes.b}
                    className="medium"
                  >
                    <PersonIcon /> Your request is generated..You will soon be
                    contacted by financial institution
                  </div>

                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e) => onSubmit3({ e, user })}
                  >
                    Check Status
                  </Button>
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

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> </DialogTitle>

        {console.log(
          "yyyyyyyyyyyyyyyyyyyy",
          current_user &&
            current_user.substring(
              current_user.length - 10,
              current_user.length
            )
        )}
        <DialogContent>
          <DialogContentText>
            {current_user &&
            current_user.substring(
              current_user.length - 10,
              current_user.length - 2
            ) === "Verified" ? (
              <div className={classes.sak}>
                You have been Verified{" "}
                <CheckCircleIcon style={{ color: "green" }}></CheckCircleIcon>{" "}
              </div>
            ) : (
              <div>You are still being processed</div>
            )}
          </DialogContentText>

          {/* <h1>inside dialogbox</h1> */}
        </DialogContent>
        <DialogActions>
          <Button className={classes.b} onClick={handleClose2}>
            <center>Cancel</center>
          </Button>
          {/* <Button variant="contained" color="grey" onClick={submit} >
    Add Bus
  </Button> */}
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {" "}
          <bold>Public Key:</bold>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{public_key}</DialogContentText>

          {/* <h1>inside dialogbox</h1> */}
        </DialogContent>
        <DialogActions>
          <Button className={classes.b} onClick={handleClose}>
            <center>Cancel</center>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Dashboard.propTypes = {
  category: PropTypes.string,
  auth: PropTypes.object,
  public_key: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  category: state.auth.category,
  name: state.auth.user.name,
  public_key: state.auth.public_key,
  private_key: state.auth.private_key,
  user: state.auth.user,
  auth: state.auth,
  current_user: state.auth.current_user,
});

export default connect(mapStateToProps, { Get_keys, Notify })(Dashboard);
