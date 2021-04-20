import axios from "axios";
import {
  REGISTER_SUCCESS2,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED2,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_ALL_USERS,
  //CLEAR_PROFILE,
} from "./types";
import { setAlert } from "./alert.js";
import setAuthToken from "../utils/setAuthToken";
export const loadUser = () => async (dispatch) => {
  console.log(localStorage.token);

  try {
    console.log("token hai ye2!");
    console.log(localStorage.token);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    console.log("in");
    const res = await axios.get("/api/auth");
    console.log("in user loaded");
    if (res) console.log(res);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const Approve = (user) => async (dispatch) => {
  console.log(user);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //const timestamp=null;

  const body = JSON.stringify(user);

  try {
    //console.log("token hai ye2!");
    //console.log(localStorage.token);
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }

    // console.log("in");
    const res = await axios.post("/api/auth/approve", body, config);

    // console.log("in user loaded");
    if (res) console.log(res);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    const res1 = await axios.post("/api/users/all_users", config);
    console.log("refreshing users", res1.data);

    //console.log(res.data);
    //localStorage.setItem("token", res.data.token);

    dispatch({
      type: GET_ALL_USERS,
      payload: res1.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const loadUser2 = () => async (dispatch) => {
  console.log(localStorage.token);

  try {
    console.log("token hai ye2!");
    console.log(localStorage.token);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    console.log("in");
    const res = await axios.get("/api/auth/fin");
    console.log("in user loaded");
    if (res) console.log(res);

    dispatch({
      type: USER_LOADED2,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, email, password, dob, id }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("action");
  const body = JSON.stringify({ name, email, password, dob, id });
  try {
    const res = await axios.post("/api/users", body, config);
    //localStorage.setItem("token", res.data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((errpr) => dispatch(setAlert(errors.msg, "danger")));
    // }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
//login
export const register2 = ({ name, password }) => async (dispatch) => {
  console.log("ENTRYYYYYYYYYYYYY!");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("action");
  const body = JSON.stringify({ name, password });
  try {
    const res = await axios.post("/api/users/inst", body, config);
    console.log("after user register 2 api", res);

    //const res1=await axios.post("/api/users/all_users",body,config);
    //const res1=await axios.post("/api/users/all_users",body,config);
    console.log("inside register 222222222", res.data);
    //console.log("printing res1",res1.data);

    console.log("inside actoion register 2");
    console.log(res.data);
    //localStorage.setItem("token", res.data.token);
    dispatch({
      type: REGISTER_SUCCESS2,
      payload: res.data,
    });

    dispatch(loadUser2());
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((errpr) => dispatch(setAlert(errors.msg, "danger")));
    // }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export const all_users = () => async (dispatch) => {
  console.log("ENTRYYYYYYYYYYYYY of all_users!");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("action");

  try {
    //const res1=await axios.post("/api/users/all_users",body,config);
    const res1 = await axios.post("/api/users/all_users", config);
    console.log("inside register 222222222", res1.data);

    console.log("inside actoion all_users");
    //console.log(res.data);
    //localStorage.setItem("token", res.data.token);

    dispatch({
      type: GET_ALL_USERS,
      payload: res1.data,
    });
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((errpr) => dispatch(setAlert(errors.msg, "danger")));
    // }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  //console.log(email);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/auth", formData, config);

    //localStorage.setItem("token", res.data.token);
    console.log("before login success dis");

    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    //console.log("ye hai error")
    //console.log(err)
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((errpr) => dispatch(setAlert(errors.msg, "danger")));
    // }
    //localStorage.removeItem("token");

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
//logout
export const logout = () => (dispatch) => {
  console.log("logout");
  dispatch({ type: LOGOUT });
};
