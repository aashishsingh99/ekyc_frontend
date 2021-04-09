import axios from "axios";
import { GET_EVENTS } from "./types";
const io = require("socket.io-client");

const socket = io("http://localhost:5000", { transports: ["websocket"] });
// Register User
export const Get_Events = ({ chatRoomId,username}) => async (dispatch) => {
  console.log("SAKSHIIIIIIIIIIIIIIIIIIIII");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const timestamp=null;

  const body = JSON.stringify({ chatRoomId ,timestamp,username});
  try {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    const res = await axios.post("/api/event/getEvents", body, config);
    console.log("calling reducer");

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {}
};
