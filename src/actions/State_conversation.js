import axios from "axios";
import { STATE_CONVERSATION } from "./types";

import socket from "../socketConfig";

// Register User
export const State_conversation = ({ event }) => async (dispatch) => {
  let type = "CREATE";

  try {
    console.log("inside action  state_conversation");
    console.log(event);

    console.log("hello MESSAGEEEEEEE");

    dispatch({
      type: STATE_CONVERSATION,
      payload: event,
    });
  } catch (err) {
    console.log(err);
  }
};
