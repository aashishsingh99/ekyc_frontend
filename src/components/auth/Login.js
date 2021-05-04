import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import PropTypes from "prop-types";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },
  media: {
    marginTop: 50,
    height: 140,
  },
  ab: {
    width: 500,
    backgroundColor: "black",
    color: "white",
  },
  home: {
    width: 150,
    height: 30,
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login = ({ isAuthenticated, formData, onChange, onSubmit }) => {
  const { email, password, user_type } = formData;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Email"
                value={email}
                onChange={(e) => onChange(e)}
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => onChange(e)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="user_type"
                name="user_type"
                variant="outlined"
                required
                fullWidth
                id="user_type"
                label="User Type"
                value={user_type}
                onChange={(e) => onChange(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        {/* <Grid container justify="flex-end">
          Don't have an account?{"  "}&nbsp;
          <Link to="/login">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              value="login"
            >
              Sign Up
            </Button>
          </Link>
        </Grid> */}
        <Grid container justify="flex-end">
          Don't have an account?{"  "}&nbsp;
          <Link to="/register">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              value="login"
            >
              Client
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/register2">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              value="login"
            >
              Institution
            </Button>
          </Link>
        </Grid>{" "}
      </div>
      <Box mt={5}></Box>
    </Container>
  );
};

Login.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default Login;
