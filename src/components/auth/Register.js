import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
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

export default function Register({
  isAuthenticated,
  onChange,
  onSubmit,
  formData,
}) {
  const { name, email, password, dob } = formData;
  const classes = useStyles();
  const id = "1";

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                autoComplete="name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dob"
                label="DOB"
                name="dob"
                value={dob}
                onChange={(e) => onChange(e)}
                autoComplete="dob"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                autoComplete="email"
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
                value={password}
                onChange={(e) => onChange(e)}
                autoComplete="current-password"
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
            Sign Up
          </Button>
        </form>

        <Grid container justify="flex-end">
          Already have an account?{"  "}&nbsp;
          <Link to="/login">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              value="login"
            >
              Sign In
            </Button>
          </Link>
        </Grid>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
//trying

// import logo from "../../assets/ekyc.png";
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     marginTop: 20,
//   },
//   media: {
//     marginTop: 50,
//     height: 140,
//   },
//   ab: {
//     width: 500,
//     backgroundColor: "black",
//     color: "white",
//   },
//   home: {
//     width: 150,
//     height: 30,
//     fontSize: 20,
//     backgroundColor: "black",
//     color: "white",
//   },
// });
// const Register = ({ isAuthenticated, onChange, onSubmit, formData }) => {
//   const { name, email, password, dob, id } = formData;
//   const classes = useStyles();
//   return (
//     <Fragment>
//       <center>
//         <br />
//         <br />
//         <br />

//         <div className="border1">
//           {/* <img src={logo} height="150" width="500000"></img> */}
//           <br />
//           <br />
//           <br />

//           <h1 className="large text-dark">Sign Up</h1>
//           <p className="black">
//             <i className="fas fa-user"></i> Create Your Account
//           </p>
//           <form className="form" onSubmit={(e) => onSubmit(e)}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="Name"
//                 onChange={(e) => onChange(e)}
//                 autoFocus
//               />
//             </Grid>
//             <div className="form-group">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onChange(e)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 minLength="6"
//                 value={password}
//                 onChange={(e) => onChange(e)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 placeholder="Date of Birth"
//                 name="dob"
//                 minLength="6"
//                 value={dob}
//                 onChange={(e) => onChange(e)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 placeholder="ID Number"
//                 name="id"
//                 minLength="6"
//                 value={id}
//                 onChange={(e) => onChange(e)}
//                 required
//               />
//             </div>

//             <Button
//               type="submit"
//               variant="contained"
//               className={classes.home}
//               value="login"
//               onClick={onSubmit}
//             >
//               Register
//             </Button>
//             <br />
//             <br />
//           </form>
//           <p className="whitblacke">
//             Already have an account?{" "}
//             <Link to="/login">
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="secondary"
//                 value="login"
//               >
//                 Sign In
//               </Button>
//             </Link>
//           </p>
//         </div>
//       </center>
//     </Fragment>
//   );
// };
// Register.propTypes = {
//   formData: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };
// export default Register;
