import React, { Fragment, useEffect,useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import image2 from "../../img/add4.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Redirect } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { Get_keys } from "../../actions/Get_keys";
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PhotoIcon from '@material-ui/icons/Photo';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';


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
    height: 30,
    fontSize: 20,
    width: 250,
    backgroundColor: "black",
    color: "white",
  },
});
const useStylesForm = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '10ch',
    },
  },
}));



  
  
const Dashboard2 = () => {
return (
  <div>

    <h1>hello dashboard12</h1>
  </div>
)

};

Dashboard2.propTypes = {

};

const mapStateToProps = (state) => ({
 // category: state.auth.category,
 
});

export default connect(mapStateToProps, {})(Dashboard2);
