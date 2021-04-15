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
import {all_users} from "../../actions/auth";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";


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




  
  
const Dashboard2 = ({all_users,users}) => {

  useEffect(() => {
    // check for token in LS

    all_users();
  }, []);
  const classes = useStyles();

  

  
return (
  <Fragment>
  {users && !users.length ? (
    <h1>No Contacts Found</h1>
  ) :
  
   (
     users && users.length && users.map((user)=>(
      <Fragment>{
        <Card className={classes.root}>
                <CardActionArea>
                  {/* <CardMedia className={classes.media} image={img} title={bus.bus_id} /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.Key} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Email:{user.Record.make} <br/>
                    DOB:{user.Record.color}
                      <br />
                    
                    </Typography>
                  </CardContent>
                </CardActionArea>
        
                <CardActions>
                   <Link to={`/api/users/bus/${"bus._id"}`}>
                     {" "}
                   <Button
                      className={classes.ab}
                      type="submit"
                      variant="contained"
                      value="login"
                    >
                      {" "}
                     Approve{" "}
                    </Button>
                  </Link>{" "}
                </CardActions>
              </Card>}</Fragment>
     ))
    

   )
   }
  
  </Fragment>
);}


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

Dashboard2.propTypes = {

};

const mapStateToProps = (state) => ({
 // category: state.auth.category,
 users:state.auth.users,
 
});

export default connect(mapStateToProps, {all_users})(Dashboard2);
