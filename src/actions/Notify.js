import axios from "axios";
import { NOTIFY } from "./types";

// Register User
export const Notify = ({ user }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("AK@", user);
  console.log("AKS", user.name);
  const body = JSON.stringify({ user });
  try {
    console.log("inside action notify Message");
    const res = await axios.post("/api/auth/notify", body, config);
    console.log("hello NOTIFYYYYY");
    console.log(res.data);
    dispatch({
      type: NOTIFY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
